import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
// import * as Actions from "../../Store/action/estimateAction";
const useStyles = makeStyles(styles); 

export default function SectionCards() {
    const dispatch = useDispatch();
    const materialData = useSelector(state => state.esitmate.materials);  
    // useEffect(() => {
    //     Actions.getEsitmateData(dispatch);
    // }, [])

    const classes = useStyles();
    return (
        <div className="cd-section" id="cards">
            <div className={classes.sectionWhite}>
                {/* BLOG PLAIN CARDS START */}
                <div>
                    <div className={classes.container}>
                        <div className="main-content">
                            <GridContainer>
                                <GridItem xs={12} sm={12}>
                                    <Card>
                                        <CardHeader>
                                            <h3 className="material-title">Prevers</h3>
                                        </CardHeader>
                                        <CardBody>
                                            <TableContainer component={Paper}>
                                                <Table className={classes.table} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell align="left">Manufacturer</TableCell>
                                                            <TableCell align="center">Style</TableCell>
                                                            <TableCell align="center">Color</TableCell>
                                                            <TableCell align="center" width="10%">Unit</TableCell>
                                                            <TableCell align="center" width="10%">Qty</TableCell>
                                                            <TableCell align="center" width="10%">Distributor</TableCell>
                                                            <TableCell align="center" width="10%">Rate</TableCell>
                                                            <TableCell align="center" width="10%">Cost</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {materialData.row1.map((row, key) => (
                                                            <TableRow key={key}>
                                                                <TableCell align="left">{row.manufacturer}</TableCell>
                                                                <TableCell align="center">{row.style}</TableCell>
                                                                <TableCell align="center">{row.color}</TableCell>
                                                                <TableCell align="center">{row.unit}</TableCell>
                                                                <TableCell align="center">{row.qty}</TableCell>
                                                                <TableCell align="center">{row.distributor}</TableCell>
                                                                <TableCell align="center">{row.rate}</TableCell>
                                                                <TableCell align="center">{row.cost}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12}>
                                    <Card>
                                        <CardHeader>
                                            <h3 className="material-title">Segmental Wall</h3>
                                        </CardHeader>
                                        <CardBody>
                                            <TableContainer component={Paper}>
                                                <Table className={classes.table} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell align="left">Manufacturer</TableCell>
                                                            <TableCell align="center" width="10%">Unit</TableCell>
                                                            <TableCell align="center" width="10%">Qty</TableCell>
                                                            <TableCell align="center" width="10%">Distributor</TableCell>
                                                            <TableCell align="center" width="10%">Rate</TableCell>
                                                            <TableCell align="center" width="10%">Cost</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {materialData.row2.map((row, key) => (
                                                            <TableRow key={key}>
                                                                <TableCell align="left">{row.manufacturer}</TableCell>
                                                                <TableCell align="center">{row.unit}</TableCell>
                                                                <TableCell align="center">{row.qty}</TableCell>
                                                                <TableCell align="center">{row.distributor}</TableCell>
                                                                <TableCell align="center">{row.rate}</TableCell>
                                                                <TableCell align="center">{row.cost}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12}>
                                    <Card>
                                        <CardHeader>
                                            <h3 className="material-title">Construction</h3>
                                        </CardHeader>
                                        <CardBody>
                                            <TableContainer component={Paper}>
                                                <Table className={classes.table} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell align="left">Manufacturer</TableCell>
                                                            <TableCell align="center">Color</TableCell>
                                                            <TableCell align="center" width="10%">Unit</TableCell>
                                                            <TableCell align="center" width="10%">Qty</TableCell>
                                                            <TableCell align="center" width="10%">Distributor</TableCell>
                                                            <TableCell align="center" width="10%">Rate</TableCell>
                                                            <TableCell align="center" width="10%">Cost</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {materialData.row3.map((row, key) => (
                                                            <TableRow key={key}>
                                                                <TableCell align="left">{row.manufacturer}</TableCell>
                                                                <TableCell align="center">{row.color}</TableCell>
                                                                <TableCell align="center">{row.unit}</TableCell>
                                                                <TableCell align="center">{row.qty}</TableCell>
                                                                <TableCell align="center">{row.distributor}</TableCell>
                                                                <TableCell align="center">{row.rate}</TableCell>
                                                                <TableCell align="center">{row.cost}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </CardBody>
                                    </Card>
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
