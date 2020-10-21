import React from "react";
import { useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import FormControl from '@material-ui/core/FormControl';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
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
    createData('Margin Expenses', '$ 2,000.00', '31 %'),
    createData('SubPay', '$ 1,000.00', '16 %'),
    createData('Margin Profit', '$3, 382.98', ''),
];
const rows1 = [
    createData('Grill', '$ 750'),
];
const rows2 = [
    createData('$500 Coupon', -500),
    createData('8% Cash', -570.00),
    createData('10% COVID', -656.00),
];

function createData(attr, cost, percent) {
    return { attr, cost, percent };
}
export default function SectionCards() {

    const salesData = useSelector(state => state.esitmate.sales);

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
                                                    <h3 className="material-title">Sales Settings</h3>
                                                </CardHeader>
                                                <CardBody>
                                                    <TableContainer component={Paper}>
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableBody>
                                                                <TableRow>
                                                                    <TableCell align="left" width="120px">Margin</TableCell>
                                                                    <TableCell align="center">

                                                                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                                                            <OutlinedInput
                                                                                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                                                                aria-describedby="outlined-weight-helper-text"
                                                                                style={{ width: 80 }}
                                                                                inputProps={{
                                                                                    'aria-label': 'weight',
                                                                                }}
                                                                                labelWidth={0}
                                                                            />
                                                                        </FormControl>
                                                                    </TableCell>
                                                                    <TableCell />
                                                                </TableRow>
                                                                {salesData.slaes_setting.map((row, key) => (
                                                                    <TableRow key={key}>
                                                                        <TableCell align="left" width="160px">{row.attr1}</TableCell>
                                                                        <TableCell align="center">$ {row.cost}</TableCell>
                                                                        <TableCell align="center">% {row.percent}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                                <TableRow>
                                                                    <TableCell align="left" width="160px">Margin Expenses</TableCell>
                                                                    <TableCell align="center">$ 3,382.98</TableCell>
                                                                    <TableCell />
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell align="left" width="160px"><h5 className="sales-total">Total 1:</h5></TableCell>
                                                                    <TableCell align="center"><h5 className="sales-total">$ 6,382.98</h5></TableCell>
                                                                    <TableCell />
                                                                </TableRow>
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
                                <GridItem xs={12} sm={12} md={6} lg={6}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            <Card>
                                                <CardHeader>
                                                    <h3 className="material-title">Product Markup</h3>
                                                </CardHeader>
                                                <CardBody>
                                                    <TableContainer component={Paper}>
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableBody>
                                                                <TableRow>
                                                                    <TableCell align="left">Product Markup</TableCell>
                                                                    <TableCell align="right">

                                                                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                                                            <OutlinedInput
                                                                                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                                                                aria-describedby="outlined-weight-helper-text"
                                                                                style={{ width: 80 }}
                                                                                inputProps={{
                                                                                    'aria-label': 'weight',
                                                                                }}
                                                                                labelWidth={0}
                                                                            />
                                                                        </FormControl>
                                                                    </TableCell>
                                                                </TableRow>
                                                                {salesData.product_markup.map((row, key) => (
                                                                    <TableRow key={key}>
                                                                        <TableCell align="left" width="160px">{row.attr1}</TableCell>
                                                                        <TableCell align="right">{row.cost}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                                <TableRow>
                                                                    <TableCell><h5 className="sales-total">Total 2:</h5></TableCell>
                                                                    <TableCell align="right"><h5 className="sales-total">$ 1,250.00</h5></TableCell>
                                                                </TableRow>
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
                                                    <h3 className="material-title">Discounts</h3>
                                                    <div className="addable-edge">
                                                        <Button color="success" size="sm">
                                                            <AddIcon />Add
                                                        </Button>
                                                    </div>
                                                </CardHeader>
                                                <CardBody>
                                                    <TableContainer component={Paper}>
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableRow>
                                                                <TableCell><h5 className="sales-total">Pre Discount Total</h5></TableCell>
                                                                <TableCell align="right"><h5 className="sales-total">$ 7,632.98</h5></TableCell>
                                                            </TableRow>
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="left">Discounts</TableCell>
                                                                    <TableCell align="right">Amount</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {salesData.discounts.map((row, key) => (
                                                                    <TableRow key={key}>
                                                                        <TableCell align="left">{row.attr1}</TableCell>
                                                                        <TableCell align="right">{row.cost}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                                <TableRow>
                                                                    <TableCell><h5 className="sales-total">Total After Discount</h5></TableCell>
                                                                    <TableCell align="right"><h5 className="sales-total">$ 5,946.98</h5></TableCell>
                                                                </TableRow>
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
