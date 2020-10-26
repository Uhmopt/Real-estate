import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// @material-ui/icons
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid'; 
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as Actions from '../../Store/action/salesAction';

export default function AddDiscountDialog() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [discount, setDiscount] = useState('');
    const [amount, setAmount] = useState(0);
    const [errorMessage, setErrormessage] = useState("");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }; 
    const addDiscount = () => {
        if (discount === "" || amount === 0 || amount > 0) {
            setErrormessage("Insert the discount and amount field correctly.")
            return false;
        } else {
            setErrormessage("");
            dispatch(Actions.addDiscount(discount, amount));
            setOpen(false);
            setAmount(0);
            setDiscount('');
        }
    }

    return (
        <div>
            <Button variant="contained" color="primary" size="small" onClick={handleClickOpen}>
                <AddIcon />
                Add
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Add new discount"}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} style={{ marginTop: 10 }}>
                        <Grid item xs={6}>
                            <TextField
                                error
                                label="Discount"
                                variant="outlined"
                                onChange={event => setDiscount(event.target.value)}
                                value={discount}
                                helperText={errorMessage}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Amount"
                                type="number"
                                onChange={event => setAmount(event.target.value)}
                                variant="outlined"
                                value={amount}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        <CancelIcon />Cancel
                    </Button>
                    <Button variant="contained" color="primary" onClick={addDiscount}>
                        <SaveIcon />Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}