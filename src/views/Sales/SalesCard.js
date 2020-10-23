import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import AddExpense from "./AddDiscountDialog.js";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import * as Actions from "../../Store/action/salesAction"

const useStyles = makeStyles(styles);

export default function SectionCards() {
    const dispatch = useDispatch();  
    const salesData = useSelector(state => state.esitmate.sales);
    const [preDiscountTotal, setPreDiscountTotal] = useState();
    setPreDiscountTotal(7689.98)
    const [discountData, setDiscountData] = useState([]);
    const salesStateData = useSelector(state => state.sales.salesData);
    const afterTotal = useSelector(state => state.sales.afterTotal);

    const deleteDiscount = (key) => {
        const data = salesStateData;
        data.splice(key, 1); 
        dispatch({type: "DELETE_SALES_DATA", payload: data})
    }

    useEffect(() => {
        setDiscountData(salesStateData);
    }, [salesStateData])

    useEffect(() => {
        dispatch(Actions.setTotalPay(discountData, preDiscountTotal))
    }, [preDiscountTotal,discountData, dispatch])
    const classes = useStyles();
    return (
        <div className="cd-section">
            <div className={classes.sectionWhite}>
                {/* BLOG PLAIN CARDS START */}
                <div>
                    <div className={classes.container}>
                        <div className="main-content">
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
                                                                        <TableCell align="center">{row.percent} %</TableCell>
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
                                                        <AddExpense />
                                                    </div>
                                                </CardHeader>
                                                <CardBody>
                                                    <TableContainer component={Paper}>
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="left">Discounts</TableCell>
                                                                    <TableCell align="right">Amount</TableCell>
                                                                    <TableCell align="left" width="30px"></TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                <TableRow>
                                                                    <TableCell><h5 className="sales-total">Pre Discount Total</h5></TableCell>
                                                                    <TableCell align="right"><h5 className="sales-total">$ 7,632.98</h5></TableCell>
                                                                    <TableCell align="left" width="30px"></TableCell>
                                                                </TableRow>
                                                                {discountData.map((row, key) => (
                                                                    <TableRow key={key}>
                                                                        <TableCell align="left">{row.attr1}</TableCell>
                                                                        <TableCell align="right">{row.cost}</TableCell>
                                                                        <TableCell align="left" width="30px">
                                                                            <Button aria-label="delete" style={{minWidth: 25}} className={classes.margin} size="small" onClick={e => deleteDiscount(key)}>
                                                                                <ClearIcon fontSize="inherit" />
                                                                            </Button>
                                                                        </TableCell>
                                                                    </TableRow>
                                                                ))}
                                                                <TableRow>
                                                                    <TableCell><h5 className="sales-total">Total After Discount</h5></TableCell>
                                                                    <TableCell align="right"><h5 className="sales-total">$ {afterTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h5></TableCell>
                                                                    <TableCell align="left" width="30px"></TableCell>
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
