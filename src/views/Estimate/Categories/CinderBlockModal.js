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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useTheme } from '@material-ui/core/styles';
import { Collapse } from 'react-collapse';

import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import CloseIcon from '@material-ui/icons/Close';
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Check from "@material-ui/icons/Check";

import img from 'assets/img/categories/cinder-block.svg';

const useStyles1 = makeStyles(basicsStyle);
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
    const classes1 = useStyles1();
    const classes = useStyles();
    const theme = useTheme();
    const [checked, setChecked] = React.useState([24, 22]);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [manufacturers, setManufacturers] = React.useState('');
    const [products, setProducts] = React.useState('');

    const handleManufacture = (event) => {
        setManufacturers(event.target.value);
    };

    const handleProduct = (event) => {
        setProducts(event.target.value);
    };
    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
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
                    Cinder Block Wall
                </h5>
            </div>
            <Dialog
                open={open}
                fullScreen={fullScreen}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle>
                    CINDER BLOCK WALL
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
                                <Grid item xs={12} md={4}>
                                    <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                        <InputLabel>Manufacturer</InputLabel>
                                        <Select
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
                                <Grid item xs={12} md={4}>
                                    <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                        <InputLabel>Product</InputLabel>
                                        <Select
                                            value={products}
                                            onChange={handleProduct}
                                            label="Product"
                                        >
                                            <MenuItem value={40}>Product 1</MenuItem>
                                            <MenuItem value={50}>Product 2</MenuItem>
                                            <MenuItem value={60}>Product 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={4}>
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
                                    <Grid item md={3} xs={11}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(21)}
                                                    checkedIcon={<Check className={classes1.checkedIcon} />}
                                                    icon={<Check className={classes1.uncheckedIcon} />}
                                                    classes={{
                                                        checked: classes1.checked,
                                                        root: classes1.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{ label: classes1.label, root: classes1.labelRoot }}
                                            style={{ marginLeft: 0, marginTop: 12 }}
                                            label="Is Edge?"
                                        />
                                    </Grid>

                                    <Grid item md={3} xs={11}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                            <TextField label="SF" variant="outlined" />
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={3} xs={11}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                            <TextField label="Color" variant="outlined" />
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={3} xs={11}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                            <TextField label="Depth" variant="outlined" />
                                        </FormControl>
                                    </Grid>

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

                                    <Grid item md={12} xs={11}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(21)}
                                                    checkedIcon={<Check className={classes1.checkedIcon} />}
                                                    icon={<Check className={classes1.uncheckedIcon} />}
                                                    classes={{
                                                        checked: classes1.checked,
                                                        root: classes1.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{ label: classes1.label, root: classes1.labelRoot }}
                                            style={{ marginLeft: 0, marginTop: -16 }}
                                            label="Show presentation options"
                                        />
                                    </Grid>

                                    <Grid item md={12} xs={11}>
                                        <div className="modal-scroll">
                                            <Grid item md={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            tabIndex={-1}
                                                            onClick={() => handleToggle(21)}
                                                            checkedIcon={<Check className={classes1.checkedIcon} />}
                                                            icon={<Check className={classes1.uncheckedIcon} />}
                                                            classes={{
                                                                checked: classes1.checked,
                                                                root: classes1.checkRoot
                                                            }}
                                                        />
                                                    }
                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                    style={{ marginLeft: 0, marginTop: -16 }}
                                                    label="Option 1"
                                                />
                                            </Grid>
                                            <Grid item md={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            tabIndex={-1}
                                                            onClick={() => handleToggle(21)}
                                                            checkedIcon={<Check className={classes1.checkedIcon} />}
                                                            icon={<Check className={classes1.uncheckedIcon} />}
                                                            classes={{
                                                                checked: classes1.checked,
                                                                root: classes1.checkRoot
                                                            }}
                                                        />
                                                    }
                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                    style={{ marginLeft: 0, marginTop: -16 }}
                                                    label="Option 2"
                                                />
                                            </Grid>
                                            <Grid item md={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            tabIndex={-1}
                                                            onClick={() => handleToggle(21)}
                                                            checkedIcon={<Check className={classes1.checkedIcon} />}
                                                            icon={<Check className={classes1.uncheckedIcon} />}
                                                            classes={{
                                                                checked: classes1.checked,
                                                                root: classes1.checkRoot
                                                            }}
                                                        />
                                                    }
                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                    style={{ marginLeft: 0, marginTop: -16 }}
                                                    label="Option 3"
                                                />
                                            </Grid>
                                            <Grid item md={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            tabIndex={-1}
                                                            onClick={() => handleToggle(21)}
                                                            checkedIcon={<Check className={classes1.checkedIcon} />}
                                                            icon={<Check className={classes1.uncheckedIcon} />}
                                                            classes={{
                                                                checked: classes1.checked,
                                                                root: classes1.checkRoot
                                                            }}
                                                        />
                                                    }
                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                    style={{ marginLeft: 0, marginTop: -16 }}
                                                    label="Option 4"
                                                />
                                            </Grid>
                                            <Grid item md={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            tabIndex={-1}
                                                            onClick={() => handleToggle(21)}
                                                            checkedIcon={<Check className={classes1.checkedIcon} />}
                                                            icon={<Check className={classes1.uncheckedIcon} />}
                                                            classes={{
                                                                checked: classes1.checked,
                                                                root: classes1.checkRoot
                                                            }}
                                                        />
                                                    }
                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                    style={{ marginLeft: 0, marginTop: -16 }}
                                                    label="Option 5"
                                                />
                                            </Grid>
                                        </div>
                                    </Grid>

                                    <Grid item md={12} xs={11}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(21)}
                                                    checkedIcon={<Check className={classes1.checkedIcon} />}
                                                    icon={<Check className={classes1.uncheckedIcon} />}
                                                    classes={{
                                                        checked: classes1.checked,
                                                        root: classes1.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{ label: classes1.label, root: classes1.labelRoot }}
                                            style={{ marginLeft: 0, marginTop: -10 }}
                                            label="Сheck all"
                                        />
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
