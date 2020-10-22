import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";

import img1 from "assets/img/products/1.jpg";
import img2 from "assets/img/products/2.jpg";
import img3 from "assets/img/products/3.jpg";
import img4 from "assets/img/products/5.jpg";
import img5 from "assets/img/products/6.jpg";

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(basicsStyle);
export default function SectionCards() {

    const [custom_options, setOptions] = React.useState('');
    const [custom_options1, setOptions1] = React.useState('');
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
    const handleOptions = (event) => {
        setOptions(event.target.value);
    };
    const handleOptions1 = (event) => {
        setOptions1(event.target.value);
    };
    return (
        <div className="cd-section">
            <div className={classes.sectionWhite}>
                {/* BLOG PLAIN CARDS START */}
                <div>
                    <div className={classes.container}>
                        <div className="main-content">
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={10} lg={10}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <Card>
                                                <CardHeader>
                                                    <h3 className="prst-title">Defalut Group</h3>
                                                    <div className="checkable-edge">
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
                                                        />
                                                    </div>
                                                </CardHeader>

                                                <CardBody>
                                                    <GridContainer style={{ marginBottom: 12 }}>
                                                        <GridItem xs={12} sm={6} md={1}>
                                                            <div className="product-img" >
                                                                <img src={img1} alt="" />
                                                            </div>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Product Type</h6>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={3}>
                                                            <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                                                <InputLabel>Option choice</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={custom_options}
                                                                    onChange={handleOptions}
                                                                    label="Option choice"
                                                                >
                                                                    <MenuItem value={10}>Option 1</MenuItem>
                                                                    <MenuItem value={20}>Option 2</MenuItem>
                                                                    <MenuItem value={30}>Option 3</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </GridItem>
                                                    </GridContainer>
                                                    <GridContainer>
                                                        <GridItem xs={12} sm={6} md={1}>
                                                            <div className="product-img" >
                                                                <img src={img3} alt="" />
                                                            </div>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Product Type</h6>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Attribute 1</h6>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Attribute 2</h6>
                                                        </GridItem>
                                                    </GridContainer>
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
                                                    <h3 className="prst-title">Firepit Area</h3>
                                                    <div className="checkable-edge">
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
                                                        />
                                                    </div>
                                                </CardHeader>

                                                <CardBody>
                                                </CardBody>

                                                <CardFooter>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} lg={2}>
                                    <h3 className="product-price">$ 0.00</h3>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={10} lg={10}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <Card>
                                                <CardHeader>
                                                    <h3 className="prst-title">Stonwall Walkway with Lights</h3>
                                                    <div className="checkable-edge">
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
                                                        />
                                                    </div>
                                                </CardHeader>

                                                <CardBody>
                                                    <GridContainer style={{ marginBottom: 12 }}>
                                                        <GridItem xs={12} sm={6} md={1}>
                                                            <div className="product-img" >
                                                                <img src={img4} alt="" />
                                                            </div>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Product Type</h6>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={3}>
                                                            <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                                                                <InputLabel>Option choice</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={custom_options1}
                                                                    onChange={handleOptions1}
                                                                    label="Option choice"
                                                                >
                                                                    <MenuItem value={10}>Option 1</MenuItem>
                                                                    <MenuItem value={20}>Option 2</MenuItem>
                                                                    <MenuItem value={30}>Option 3</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </GridItem>
                                                    </GridContainer>
                                                    <GridContainer>
                                                        <GridItem xs={12} sm={6} md={1}>
                                                            <div className="product-img" >
                                                                <img src={img2} alt="" />
                                                            </div>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Product Type</h6>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Attribute 1</h6>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Attribute 2</h6>
                                                        </GridItem>
                                                    </GridContainer>
                                                    <GridContainer>
                                                        <GridItem xs={12} sm={6} md={1}>
                                                            <div className="product-img" >
                                                                <img src={img5} alt="" />
                                                            </div>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Product Type</h6>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Attribute 1</h6>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={6} md={2}>
                                                            <h6 className="card-main-style">Attribute 2</h6>
                                                        </GridItem>
                                                    </GridContainer>
                                                </CardBody>

                                                <CardFooter>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} lg={2}>
                                    <h3 className="product-price">$ 6,350.00</h3>
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
