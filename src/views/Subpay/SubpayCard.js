import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import FormControl from '@material-ui/core/FormControl';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// @material-ui/icons
import AddIcon from '@material-ui/icons/Add';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);
const daily_hours = 10;
const rows = [
    createData('Pavers', 860),
    createData('Cinder Block', 740),
    createData('Sod', 450),
];
const rows1 = [
    createData('Grill', '$ 750'),
];
const rows2 = [
    createData('Delivery', '$ 250'),
    createData('Equipment', '$ 1000'),
];

function createData(attr, cost) {
    return { attr, cost };
}
export default function SectionCards() {
    const dispatch = useDispatch();

    const [totalHours, setTotalHours] = useState(0);
    const [totalDays, setTotalDays] = useState(0);
    const [teams, setProducts] = useState('');
    const [dailyRate, setDailyRate] = useState(0);
    const [totalHoursPrice, setHoursPrice] = useState(0);

    const subPayData = useSelector(state => state.esitmate.subpay);
    useEffect(() => {
        let sumHours = 0;
        subPayData.hours_estimate.map(item => {
            return sumHours += item.hours;
        });
        setTotalHours(sumHours);
        setTotalDays( Math.ceil( sumHours / daily_hours ) );
    }, [])

    const handleTeams = (event) => {
        setProducts(event.target.value);
        setDailyRate(event.target.value);
        let tempPrice = event.target.value * totalDays;
        setHoursPrice( tempPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    };

    const handleRate = (event) => {
        setDailyRate(event.target.value);
        let tempPrice = event.target.value * totalDays;
        setHoursPrice( tempPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    };
    const classes = useStyles();
    return (
        <div className="cd-section" id="cards">
            <div className={classes.sectionWhite}>
                {/* BLOG PLAIN CARDS START */}
                <div>
                    <div className={classes.container}>
                        <div className="main-content1">
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6} lg={6}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            <Card>
                                                <CardHeader>
                                                    <h3 className="material-title">Hours Estimate</h3>
                                                </CardHeader>
                                                <CardBody>
                                                    <TableContainer component={Paper}>
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="left">Product</TableCell>
                                                                    <TableCell align="left"></TableCell>
                                                                    <TableCell align="center">Estimated number of hours</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {subPayData.hours_estimate.map((row, key) => (
                                                                    <TableRow key={key}>
                                                                        <TableCell align="left">{row.product}</TableCell>
                                                                        <TableCell align="left"></TableCell>
                                                                        <TableCell align="center">{row.hours}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                                <TableRow>
                                                                    <TableCell />
                                                                    <TableCell align="left">Total</TableCell>
                                                                    <TableCell align="center">{totalHours}</TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell />
                                                                    <TableCell align="left">Est.Day</TableCell>
                                                                    <TableCell align="center">{totalDays}</TableCell>
                                                                </TableRow>
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </CardBody>
                                                <CardFooter>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                        <GridItem xs={12}>
                                            <GridContainer>
                                                <GridItem xs={12} md={6} lg={4}>
                                                    <div className="custom-grid-1">
                                                        <h5 className="subpay-style1">Team :</h5>
                                                        <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                                            <InputLabel>Teams</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={teams}
                                                                onChange={handleTeams}
                                                                label="Team"
                                                            >
                                                                <MenuItem value={700}>Team 1</MenuItem>
                                                                <MenuItem value={500}>Team 2</MenuItem>
                                                                <MenuItem value={100}>Team 3</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </GridItem>
                                                <GridItem md={6} lg={4}>
                                                    <div className="custom-grid-2">
                                                        <h5 className="subpay-style1">Daily Rate :</h5>
                                                        <TextField label="SF" type="number" variant="outlined" value={dailyRate} onChange={handleRate} />
                                                    </div>
                                                </GridItem>
                                                <GridItem xs={12} md={12} lg={4}>
                                                    <h5 className="subpay-total">$ {totalHoursPrice}</h5>
                                                </GridItem>
                                            </GridContainer>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} lg={6}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            <Card>
                                                <CardHeader>
                                                    <h3 className="material-title">Installation Fees</h3>
                                                </CardHeader>
                                                <CardBody>
                                                    <TableContainer component={Paper}>
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="left">Product</TableCell>
                                                                    <TableCell align="center">Cost</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {rows1.map((row, key) => (
                                                                    <TableRow key={key}>
                                                                        <TableCell align="left">{row.attr}</TableCell>
                                                                        <TableCell align="center">{row.cost}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </CardBody>
                                                <CardFooter>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            <Card>
                                                <CardHeader>
                                                    <h3 className="material-title">Miscellaneous Expenses</h3>
                                                    <div className="addable-edge">
                                                        <Button color="success" size="sm">
                                                            <AddIcon />Add
                                                        </Button>
                                                    </div>
                                                </CardHeader>
                                                <CardBody>
                                                    <TableContainer component={Paper}>
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="left">Expense</TableCell>
                                                                    <TableCell align="center">Cost</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {rows2.map((row, key) => (
                                                                    <TableRow key={key}>
                                                                        <TableCell align="left">{row.attr}</TableCell>
                                                                        <TableCell align="center">{row.cost}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </CardBody>
                                                <CardFooter>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                {/* BLOG PLAIN CARDS END */}
            </div>
        </div >
    );
}
