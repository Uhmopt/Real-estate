import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
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
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import CloseIcon from '@material-ui/icons/Close';
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Collapse } from 'react-collapse';

import * as Actions from "../../../Store/action/estimateAction";
import img from 'assets/img/categories/paver.svg';

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
    
    const dispatch = useDispatch();
    const groupsData = useSelector(state => state.group.groupData);
    // Modal state
    const [open, setOpen] = useState(true);

    // Mini/Maxium toggle state
    const [isOpened, setIsOpened] = useState(true);
    const classes1 = useStyles1();
    const classes = useStyles();
    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [manufacturers, setManufacturers] = useState('Manufacturer 1');
    const [products, setProducts] = useState('Product 1');
    const [sf, setSF] = useState('');
    const [isEdge, setIsEdge] = useState(false);
    const [lf, setLF] = useState('');
    const [color, setColor] = useState('');
    const [depth, setDepth] = useState('');
    const [notes, setNotes] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);
    const [option5, setOption5] = useState(false);
    const [checkAll, setCheckAll] = useState(false);

    const handleManufacture = (event) => {
        setManufacturers(event.target.value);
    };

    const handleProduct = (event) => {
        setProducts(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveItem = () => {

        dispatch(Actions.setAddNewItem( groupsData, "Paver", manufacturers, products, sf, isEdge, lf, color, depth, notes, option1, option2, option3,option4,option5 ))

    }

    const handleCheckAll = () => {
        setOption1(!checkAll);
        setOption2(!checkAll);
        setOption3(!checkAll);
        setOption4(!checkAll);
        setOption5(!checkAll);
        setCheckAll(!checkAll);
    }

    return (
        <div>
            <div className="modal-c-button" onClick={handleClickOpen}>
                <img src={img} alt="" className="cat-img" />
                <h5>
                    Paver
                </h5>
            </div>
            <Dialog
                open={open}
                fullScreen={fullScreen}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle>
                    PAVER
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
                                            <MenuItem value="Manufacturer 1">Manufacturer 1</MenuItem>
                                            <MenuItem value="Manufacturer 2">Manufacturer 2</MenuItem>
                                            <MenuItem value="Manufacturer 3">Manufacturer 3</MenuItem>
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
                                            <MenuItem value="Product 1">Product 1</MenuItem>
                                            <MenuItem value="Product 2">Product 2</MenuItem>
                                            <MenuItem value="Product 3">Product 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                        <TextField label="SF" variant="outlined" value={sf} onChange={e => setSF(e.target.value)} />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="modal-minimize">
                                <IconButton onClick={e => setIsOpened(!isOpened)}>
                                    {isOpened ? (
                                        <IndeterminateCheckBoxIcon />
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
                                                    color="primary"
                                                    checked={isEdge}
                                                    onClick={e => setIsEdge(!isEdge)}
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            }
                                            classes={{ label: classes1.label, root: classes1.labelRoot }}
                                            style={{ marginLeft: 0, marginTop: 12 }}
                                            label="Is Edge?"
                                        />
                                    </Grid>

                                    <Grid item md={3} xs={11}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                            <TextField label="LF" variant="outlined" value={lf} onChange={e => setLF(e.target.value)} />
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={3} xs={11}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                            <TextField label="Color" variant="outlined" value={color} onChange={e => setColor(e.target.value)} />
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={3} xs={11}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                            <TextField label="Depth" variant="outlined" value={depth} onChange={e => setDepth(e.target.value)} />
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={12} xs={11}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%", marginTop: 0 }}>
                                            <TextField
                                                label="Notes"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                value={notes}
                                                onChange={e => setNotes(e.target.value)}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={12} xs={11}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    color="primary"
                                                    checked={showOptions}
                                                    onClick={e => setShowOptions(!showOptions)}
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            }
                                            classes={{ label: classes1.label, root: classes1.labelRoot }}
                                            style={{ marginLeft: 0 }}
                                            label="Show presentation options"
                                        />
                                    </Grid>

                                    <Grid item md={12} xs={11}>
                                        <div className="modal-scroll">
                                            <Grid item md={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            color="primary"
                                                            disabled={!showOptions}
                                                            checked={option1}
                                                            onClick={e => setOption1(!option1)}
                                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                        />
                                                    }
                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                    label="Option 1"
                                                />
                                            </Grid>
                                            <Grid item md={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            color="primary"
                                                            disabled={!showOptions}
                                                            checked={option2}
                                                            onClick={e => setOption2(!option2)}
                                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                        />
                                                    }
                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                    label="Option 2"
                                                />
                                            </Grid>
                                            <Grid item md={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            color="primary"
                                                            disabled={!showOptions}
                                                            checked={option3}
                                                            onClick={e => setOption3(!option3)}
                                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                        />
                                                    }
                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                    label="Option 3"
                                                />
                                            </Grid>
                                            <Grid item md={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            color="primary"
                                                            disabled={!showOptions}
                                                            checked={option4}
                                                            onClick={e => setOption4(!option4)}
                                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                        />
                                                    }
                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                    label="Option 4"
                                                />
                                            </Grid>
                                            <Grid item md={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            color="primary"
                                                            disabled={!showOptions}
                                                            checked={option5}
                                                            onClick={e => setOption5(!option5)}
                                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                        />
                                                    }
                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                    label="Option 5"
                                                />
                                            </Grid>
                                        </div>
                                    </Grid>

                                    <Grid item md={12} xs={11}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disabled={!showOptions}
                                                    checked={checkAll}
                                                    onClick={handleCheckAll}
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            }
                                            classes={{ label: classes1.label, root: classes1.labelRoot }}
                                            style={{ marginLeft: 0 }}
                                            label="Check all"
                                        />
                                    </Grid>
                                </Grid>
                            </Collapse>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button color="success" onClick={saveItem}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
