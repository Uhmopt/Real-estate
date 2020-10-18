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
import Table from "components/Table/Table.js";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
const useStyles = makeStyles(styles);
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
                                            <h3 className="material-title">Defalut Group</h3>
                                        </CardHeader>
                                        <CardBody>

                                            <Table
                                                tableHead={[
                                                    "Manufacturer",
                                                    "Style",
                                                    "Color",
                                                    "Unit",
                                                    "Qty",
                                                    "Distributor",
                                                    "Rate",
                                                    "Cost",
                                                ]}
                                                tableData={[
                                                    [
                                                        "Nicolock",
                                                        "Stoneridge",
                                                        "RED",
                                                        "Pallet",
                                                        "2",
                                                        "Showplace",
                                                        "930",
                                                        "860",
                                                    ],
                                                    [
                                                        "Nicolock",
                                                        "Stoneridge",
                                                        "RED",
                                                        "Pallet",
                                                        "2",
                                                        "Showplace",
                                                        "930",
                                                        "860",
                                                    ],
                                                    [
                                                        "Nicolock",
                                                        "Stoneridge",
                                                        "RED",
                                                        "Pallet",
                                                        "2",
                                                        "Showplace",
                                                        "930",
                                                        "860",
                                                    ],
                                                ]}
                                                customCellClasses={[
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                ]}
                                                customClassesForCells={[0, 4, 5, 1, 1, 1, 1, 1]}
                                                customHeadCellClasses={[
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                    classes.textCenter,
                                                ]}
                                                customHeadClassesForCells={[0, 4, 5, 1, 1, 1, 1, 1]}
                                            />
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
