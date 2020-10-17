import React, { useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from '@material-ui/core/Button';
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';

import { Collapse } from 'react-collapse';

import DragDropList from "./DragDrop.js";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(basicsStyle);
export default function SectionCards() {

    const [isOpened, setIsOpened] = useState(true);
    const [isOpened1, setIsOpened1] = useState(true);
    const [isOpened2, setIsOpened2] = useState(true);
    const [checked, setChecked] = React.useState([24, 22]);
    const classes = useStyles();
    const classes1 = useStyles1();
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
    return (
        <div className="cd-section" id="cards">
            <div className={classes.sectionWhite}>
                {/* BLOG PLAIN CARDS START */}
                <div>
                    <div className={classes.container}>
                        <div style={{ minHeight: 1080, marginTop: 70 }}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={10} lg={10}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <Card>
                                                <CardHeader>
                                                    <GridContainer style={{ marginTop: 15 }}>
                                                        <GridItem xs={5} sm={5} md={6} lg={6}>
                                                            <TextField
                                                                required
                                                                label="Group name"
                                                                defaultValue="Firepit Area"
                                                                className="card-title"
                                                            />
                                                        </GridItem>
                                                        <GridItem xs={3} sm={3} md={4} lg={4}>
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
                                                                style={{ marginTop: 20 }}
                                                                label="Optional"
                                                            />
                                                        </GridItem>
                                                        <GridItem xs={4} sm={4} md={2} lg={2}>
                                                            <div className="product-action">
                                                                <Button variant="outlined" size="small" onClick={e => setIsOpened(!isOpened)}>
                                                                    {isOpened ? (
                                                                            <RemoveIcon style={{ fontSize: "1rem" }} />
                                                                    ) : (
                                                                            <AddIcon style={{ fontSize: "1rem" }} />
                                                                        )}
                                                                </Button>
                                                                <Button variant="outlined" size="small">
                                                                    <CloseIcon style={{ fontSize: "1rem" }} />
                                                                </Button>
                                                            </div>
                                                        </GridItem>
                                                    </GridContainer>
                                                </CardHeader>

                                                <CardBody>
                                                    <Collapse isOpened={isOpened}>
                                                        <DragDropList />
                                                    </Collapse>
                                                </CardBody>

                                                <CardFooter>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} lg={2}>
                                    <h3 className="product-price">$ 4,890.00</h3>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={10} lg={10}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <Card>
                                                <CardHeader>
                                                    <GridContainer style={{ marginTop: 15 }}>
                                                        <GridItem xs={5} sm={5} md={6} lg={6}>
                                                            <TextField
                                                                required
                                                                label="Group name"
                                                                defaultValue="DEFALUT GROUP"
                                                                className="card-title"
                                                            />
                                                        </GridItem>
                                                        <GridItem xs={3} sm={3} md={4} lg={4}>
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
                                                                style={{ marginTop: 20 }}
                                                                label="Optional"
                                                            />
                                                        </GridItem>
                                                        <GridItem xs={4} sm={4} md={2} lg={2}>
                                                            <div className="product-action">
                                                                <Button variant="outlined" size="small" onClick={e => setIsOpened1(!isOpened1)}>
                                                                    {isOpened1 ? (
                                                                            <RemoveIcon style={{ fontSize: "1rem" }} />
                                                                    ) : (
                                                                            <AddIcon style={{ fontSize: "1rem" }} />
                                                                        )}
                                                                </Button>
                                                                <Button variant="outlined" size="small">
                                                                    <CloseIcon style={{ fontSize: "1rem" }} />
                                                                </Button>
                                                            </div>
                                                        </GridItem>
                                                    </GridContainer>
                                                </CardHeader>

                                                <CardBody>
                                                    <Collapse isOpened={isOpened1}>
                                                        <DragDropList />
                                                    </Collapse>
                                                </CardBody>

                                                <CardFooter>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} lg={2}>
                                    <h3 className="product-price">$ 8,280.00</h3>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={10} lg={10}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <Card>
                                                <CardHeader>
                                                    <GridContainer style={{ marginTop: 15 }}>
                                                        <GridItem xs={5} sm={5} md={6} lg={6}>
                                                            <TextField
                                                                required
                                                                label="Group name"
                                                                defaultValue="Stonewall Walkway with Lights"
                                                                className="card-title"
                                                            />
                                                        </GridItem>
                                                        <GridItem xs={3} sm={3} md={4} lg={4}>
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
                                                                style={{ marginTop: 20 }}
                                                                label="Optional"
                                                            />
                                                        </GridItem>
                                                        <GridItem xs={4} sm={4} md={2} lg={2}>
                                                            <div className="product-action">
                                                                <Button variant="outlined" size="small" onClick={e => setIsOpened2(!isOpened2)}>
                                                                    {isOpened2 ? (
                                                                            <RemoveIcon style={{ fontSize: "1rem" }} />
                                                                    ) : (
                                                                            <AddIcon style={{ fontSize: "1rem" }} />
                                                                        )}
                                                                </Button>
                                                                <Button variant="outlined" size="small">
                                                                    <CloseIcon style={{ fontSize: "1rem" }} />
                                                                </Button>
                                                            </div>
                                                        </GridItem>
                                                    </GridContainer>
                                                </CardHeader>

                                                <CardBody>
                                                    <Collapse isOpened={isOpened2}>
                                                        <DragDropList />
                                                    </Collapse>
                                                </CardBody>

                                                <CardFooter>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} lg={2}>
                                    <h3 className="product-price">$ 8,500.00</h3>
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
