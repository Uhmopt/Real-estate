import React from "react";
import { useSelector, useDispatch } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

import { Collapse } from 'react-collapse';

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

    const dispatch = useDispatch();
    const groupsData = useSelector(state => state.group.groupData);

    const [custom_options, setOptions] = React.useState('');
    const classes = useStyles();
    const classes1 = useStyles1();
    const handleOptions = (event) => {
        setOptions(event.target.value);
    };
    const toggleOptional = (key) => {
        const data = groupsData;
        data[key].optional = !data[key].optional;
        dispatch({ type: "SET_ESTIMATE_GROUP", payload: data })
    };
    return (
        <div className="cd-section">
            <div className={classes.sectionWhite}>
                {/* BLOG PLAIN CARDS START */}
                <div>
                    <div className={classes.container}>
                        <div className="main-content">
                            {groupsData.map((row, key) => (
                                <GridContainer key={key}>
                                    <GridItem xs={12} sm={12} md={10} lg={10}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12} lg={12}>
                                                <Card>
                                                    <CardHeader>
                                                        <h3 className="prst-title">{row.name}</h3>
                                                        <div className="checkable-edge">
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        color="primary"
                                                                        checked={row.optional}
                                                                        onClick={e => toggleOptional(key)}
                                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                    />
                                                                }
                                                                classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                                style={{ marginLeft: 0, marginTop: 12 }}
                                                            />
                                                        </div>
                                                    </CardHeader>
                                                    <Collapse isOpened={row.optional} >
                                                        <CardBody>
                                                            {row.products.map((item, index) => (
                                                                <GridContainer key={index}>
                                                                    <GridItem xs={12} sm={6} md={1}>
                                                                        <div className="product-img" >
                                                                            <img src={img3} alt="" />
                                                                        </div>
                                                                    </GridItem>
                                                                    <GridItem xs={6} sm={6} md={2}>
                                                                        <h6 className="card-main-style">{item.title}</h6>
                                                                    </GridItem>
                                                                    <GridItem xs={6} sm={6} md={3}>
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
                                                                    <GridItem xs={6} sm={6} md={1}>
                                                                        <h6 className="card-main-style">{item.color}</h6>
                                                                    </GridItem>
                                                                    <GridItem xs={6} sm={6} md={1}>
                                                                        <h6 className="card-main-style">{item.sf}</h6>
                                                                    </GridItem>
                                                                    <GridItem xs={6} sm={6} md={1}>
                                                                        <h6 className="card-main-style">{item.sf}</h6>
                                                                    </GridItem>
                                                                    <GridItem xs={6} sm={6} md={1}>
                                                                        <h6 className="card-main-style">$ {item.cost}</h6>
                                                                    </GridItem>
                                                                </GridContainer>
                                                            ))}
                                                        </CardBody>
                                                    </Collapse>

                                                    <CardFooter>
                                                    </CardFooter>
                                                </Card>
                                            </GridItem>
                                        </GridContainer>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={2} lg={2}>
                                        <h3 className="product-price">
                                            $ { row.optional ? (
                                                row.products.reduce((pv, cv) => {
                                                    return pv + cv.cost
                                                    }, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                                            ) : (
                                                0.00
                                            )

                                            }
                                        </h3>
                                    </GridItem>
                                </GridContainer>
                            ))}
                        </div>
                    </div>
                </div>
                {/* BLOG PLAIN CARDS END */}
            </div>
        </div>
    );
}
