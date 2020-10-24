import React, { useState , useEffect} from "react";
import { useSelector } from "react-redux";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
export default function SectionPreFooter() {
    const classes = useStyles();
    const groupsData = useSelector(state => state.group.groupData);
    const [totalPrice, setTotalPrice] = useState(0);
    const [classicModal, setClassicModal] = React.useState(false);
    const discoutsTotal = -150;
    useEffect(() => {
        let sumPrice = 0;
        groupsData.map( item  => {
                item.products.map(index => {
                    sumPrice += index.cost
                    return item;
                })
            return groupsData;
        })
        setTotalPrice(sumPrice);
    }, [groupsData])

    return (
        <div>
            <div
                className={classNames(
                    classes.socialLine,
                    classes.textCenter,
                    classes.second,
                    classes.bigIcons
                )}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={2} md={2} className={classes.border}>
                            <Button
                                color="white"
                                justIcon
                                simple
                                className="price-footer"
                                onClick={() => setClassicModal(true)}
                            >
                                $ {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </Button>
                            <Dialog
                                classes={{
                                    root: classes.modalRoot,
                                    paper: classes.modal
                                }}
                                open={classicModal}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={() => setClassicModal(false)}
                                aria-labelledby="small-modal-slide-title"
                                aria-describedby="small-modal-slide-description"
                            >
                                <DialogContent
                                    id="classic-modal-slide-description"
                                    className={classes.modalBody}
                                >
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            <h5 className="text-style4">Before Discouts</h5>
                                        </GridItem>
                                        <GridItem xs={12}>
                                            <h5 className="text-style4">$ 500.00</h5>
                                        </GridItem>
                                        <GridItem xs={6}>
                                            <h6 className="modal-des">- Discout 1</h6>
                                        </GridItem>
                                        <GridItem xs={6}>
                                            <h6 className="modal-price">- 100.00</h6>
                                        </GridItem>
                                        <GridItem xs={6}>
                                            <h6 className="modal-des">- Discout 2</h6>
                                        </GridItem>
                                        <GridItem xs={6}>
                                            <h6 className="modal-price">- 50.00</h6>
                                        </GridItem>
                                        <GridItem xs={12}>
                                            <h5 className="text-style4">Total :</h5>
                                        </GridItem>
                                        <GridItem xs={12}>
                                            <h3 className="text-style2">$ {(discoutsTotal + totalPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
                                        </GridItem>
                                    </GridContainer>
                                </DialogContent>
                            </Dialog>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
