import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from "components/CustomButtons/Button.js";
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
import * as Actions from '../../Store/action/subPayAction'

export default function AddExpenseDialog() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [expense, setExpense] = useState('');
    const [cost, setCost] = useState(0);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }; 
    const addExpense = () => {
        dispatch(Actions.addExpenses(expense, cost));
        setOpen(false);
        setCost(0);
        setExpense('');
    }

    return (
        <div>
            <Button color="success" size="sm" onClick={handleClickOpen}>
                <AddIcon />
                Add
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Add new expenses"}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} style={{ marginTop: 10 }}>
                        <Grid item xs={6}>
                            <TextField
                                label="Expense"
                                variant="outlined"
                                onChange={event => setExpense(event.target.value)}
                                value={expense}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Cost"
                                type="number"
                                onChange={event => setCost(event.target.value)}
                                variant="outlined"
                                value={cost}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button size="sm" onClick={handleClose}>
                        <CancelIcon />Cancel
                    </Button>
                    <Button size="sm" onClick={addExpense} color="success">
                        <SaveIcon />Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}