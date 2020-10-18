import React from "react";

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
    const [teams, setProducts] = React.useState('');
    const handleTeams = (event) => {
        setProducts(event.target.value);
    };
    const classes = useStyles();
    return (
        <div className="cd-section" id="cards">
            <div className={classes.sectionWhite}>
                {/* BLOG PLAIN CARDS START */}
                <div>
                    <div className={classes.container}>
                        <div style={{ minHeight: "calc(100vh - 261px)", marginTop: 70 }}>
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
                                                                    <TableCell align="center">Cost</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {rows.map((row, key) => (
                                                                    <TableRow key={key}>
                                                                        <TableCell align="left">{row.attr}</TableCell>
                                                                        <TableCell align="center">{row.cost}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                                <TableRow>
                                                                    <TableCell />
                                                                    <TableCell>
                                                                        <Table>
                                                                            <TableBody>
                                                                                <TableRow>
                                                                                    <TableCell align="left">Total</TableCell>
                                                                                    <TableCell align="right">70</TableCell>
                                                                                </TableRow>
                                                                                <TableRow>
                                                                                    <TableCell align="left">Est.Day</TableCell>
                                                                                    <TableCell align="right">7</TableCell>
                                                                                </TableRow>
                                                                            </TableBody>
                                                                        </Table>
                                                                    </TableCell>
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
                                                <GridItem xs={12} md={5}>
                                                    <div className="custom-grid-1">
                                                        <h5 className="subpay-style1">Total :</h5>
                                                        <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                                            <InputLabel>Teams</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={teams}
                                                                onChange={handleTeams}
                                                                label="Product"
                                                            >
                                                                <MenuItem value={40}>Team 1</MenuItem>
                                                                <MenuItem value={50}>Team 2</MenuItem>
                                                                <MenuItem value={60}>Team 3</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </GridItem>
                                                <GridItem xs={12} md={4}>
                                                    <div className="custom-grid-2">
                                                        <h5 className="subpay-style1">Daily Rate :</h5>
                                                        <TextField label="SF" variant="outlined" />
                                                    </div>
                                                </GridItem>
                                                <GridItem xs={12} md={3}>
                                                    <h5 className="subpay-total">$ 4,900.00</h5>
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
        </div>
    );
}
