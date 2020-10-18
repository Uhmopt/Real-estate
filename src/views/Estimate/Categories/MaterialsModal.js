import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from "components/CustomButtons/Button.js";
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Collapse } from 'react-collapse';

import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import CloseIcon from '@material-ui/icons/Close';
import AddBoxIcon from '@material-ui/icons/AddBox';

import img from 'assets/img/categories/materials.svg';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function PaverModal() {

    const [isOpened, setIsOpened] = useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [manufacturers, setManufacturers] = React.useState('');

    const handleManufacture = (event) => {
        setManufacturers(event.target.value);
    };
    // Modal state
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="modal-c-button" onClick={handleClickOpen}>
                <img src={img} alt="" className="cat-img" />
                <h5>
                    materials
                </h5>
            </div>
            <Dialog
                open={open}
                fullScreen={fullScreen}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle>
                    MATERIALS
                     <div className="modal-close">
                        <IconButton onClick={handleClose}>
                            <CloseIcon style={{ color: "#fff" }} />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={11} >
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                        <InputLabel>Manufacturer</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={manufacturers}
                                            onChange={handleManufacture}
                                            label="Manufacturer"
                                        >
                                            <MenuItem value={10}>Manufacturer 1</MenuItem>
                                            <MenuItem value={20}>Manufacturer 2</MenuItem>
                                            <MenuItem value={30}>Manufacturer 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                        <TextField label="SF" variant="outlined" />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="modal-minimize">
                                <IconButton onClick={e => setIsOpened(!isOpened)}>
                                    {isOpened ? (
                                        <IndeterminateCheckBoxIcon/>
                                    ) : (
                                        <AddBoxIcon />   
                                    )}
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item sm={11}>

                            <Collapse isOpened={isOpened}>
                                <Grid container spacing={1}>

                                    <Grid item md={12} xs={11}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%", marginTop: 0 }}>
                                            <TextField 
                                                label="Notes"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                            />
                                        </FormControl>
                                    </Grid>

                                </Grid>
                            </Collapse>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button color="success" onClick={handleClose}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
