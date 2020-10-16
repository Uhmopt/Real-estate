import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
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
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(basicsStyle);

export default function SectionCards() {
    const [checked, setChecked] = React.useState([24, 22]);
    const [simpleSelect, setSimpleSelect] = React.useState("");
    const [activeRotate1, setActiveRotate1] = React.useState("");
    const [activeRotate2, setActiveRotate2] = React.useState("");
    const [activeRotate3, setActiveRotate3] = React.useState("");
    const classes = useStyles();
    const classes1 = useStyles1();
    React.useEffect(() => {
        if (window) {
            window.addEventListener("resize", addStylesForRotatingCards);
        }
        addStylesForRotatingCards();
        return function cleanup() {
            if (window) {
                window.removeEventListener("resize", addStylesForRotatingCards);
            }
        };
    });
    const addStylesForRotatingCards = () => {
        var rotatingCards = document.getElementsByClassName(classes.cardRotate);
        for (let i = 0; i < rotatingCards.length; i++) {
            var rotatingCard = rotatingCards[i];
            var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
            var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
            cardFront.style.height = "unset";
            cardFront.style.width = "unset";
            cardBack.style.height = "unset";
            cardBack.style.width = "unset";
            var rotatingWrapper = rotatingCard.parentElement;
            var cardWidth = rotatingCard.parentElement.offsetWidth;
            var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
            rotatingWrapper.style.height = cardHeight + "px";
            rotatingWrapper.style["margin-bottom"] = 30 + "px";
            cardFront.style.height = "unset";
            cardFront.style.width = "unset";
            cardBack.style.height = "unset";
            cardBack.style.width = "unset";
            cardFront.style.height = cardHeight + 35 + "px";
            cardFront.style.width = cardWidth + "px";
            cardBack.style.height = cardHeight + 35 + "px";
            cardBack.style.width = cardWidth + "px";
        }
    };
    const handleSimple = event => {
        setSimpleSelect(event.target.value);
    };
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
                        <GridContainer style={{ minHeight: "calc(100vh - 120px)", marginTop: 70 }}>
                            <GridItem xs={12} sm={12} md={10} lg={10}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12} lg={12}>
                                        <Card>
                                            <CardHeader>
                                                <GridContainer style={{ marginTop: 15 }}>
                                                    <GridItem xs={5} sm={5} md={6} lg={6}>
                                                        <CustomInput
                                                            labelText="Group name"
                                                            formControlProps={{
                                                                fullWidth: true
                                                            }}
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
                                                            <Button variant="outlined" href="#outlined-buttons" size="small">
                                                                <RemoveIcon />
                                                            </Button>
                                                            <Button variant="outlined" href="#outlined-buttons" size="small">
                                                                <CloseIcon />
                                                            </Button>
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
                                            </CardHeader>
                                            <CardBody>
                                            </CardBody>
                                            <CardBody>
                                            </CardBody>
                                            <CardFooter>
                                            </CardFooter>
                                        </Card>
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} lg={2}>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
                {/* BLOG PLAIN CARDS END */}
            </div>
        </div>
    );
}
