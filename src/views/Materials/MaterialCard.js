import React from "react";
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
const useStyles = makeStyles(styles);

const rows = [
    createData('Nicolock', 'Stoneridge', 'RED', 'Pallet', 2, 'Showplace', 930, 860),
    createData('Nicolock', 'Stoneridge', 'GREEN', 'TON', 5, 'Showplace', 930, 740),
    createData('Nicolock', 'Stoneridge', 'BLUE', 'Roll', 3, 'Showplace', 930, 450),
];
const rows1 = [
    createData('Nicolock', '', '', 'Pallet', 2, 'Showplace', 930, 860),
];
const rows2 = [
    createData('Nicolock', '', 'RGo', 'Pallet', 2, 'Showplace', 930, 860),
    createData('Nicolock', '', 'BLUE', 'TON', 5, 'Showplace', 930, 740),
    createData('Nicolock', '', 'GREEN', 'Roll', 3, 'Showplace', 930, 450),
    createData('Nicolock', '', 'GREEN', 'TON', 6, 'Showplace', 930, 450),
];

function createData(manufacturer, styles, color, unit, qty, distributor, rate, cost) {
    return { manufacturer, styles, color, unit, qty, distributor, rate, cost };
}

export default function SectionCards() {

    const classes = useStyles();
    return (
        <div className="cd-section" id="cards">
            <div className={classes.sectionWhite}>
                {/* BLOG PLAIN CARDS START */}
                <div>
                    <div className={classes.container}>
                        <div style={{ minHeight: "calc(100vh - 260px)", marginTop: 70 }}>
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
                                                            <TableCell align="center">Manufacturer</TableCell>
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
                                                        {rows.map((row, key) => (
                                                            <TableRow key={key}>
                                                                <TableCell align="center">{row.manufacturer}</TableCell>
                                                                <TableCell align="center">{row.styles}</TableCell>
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
                                                            <TableCell align="center">Manufacturer</TableCell>
                                                            <TableCell align="center" width="10%">Unit</TableCell>
                                                            <TableCell align="center" width="10%">Qty</TableCell>
                                                            <TableCell align="center" width="10%">Distributor</TableCell>
                                                            <TableCell align="center" width="10%">Rate</TableCell>
                                                            <TableCell align="center" width="10%">Cost</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rows1.map((row, key) => (
                                                            <TableRow key={key}>
                                                                <TableCell align="center">{row.manufacturer}</TableCell>
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
                                                            <TableCell align="center">Manufacturer</TableCell>
                                                            <TableCell align="center">Color</TableCell>
                                                            <TableCell align="center" width="10%">Unit</TableCell>
                                                            <TableCell align="center" width="10%">Qty</TableCell>
                                                            <TableCell align="center" width="10%">Distributor</TableCell>
                                                            <TableCell align="center" width="10%">Rate</TableCell>
                                                            <TableCell align="center" width="10%">Cost</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rows2.map((row, key) => (
                                                            <TableRow key={key}>
                                                                <TableCell align="center">{row.manufacturer}</TableCell>
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
