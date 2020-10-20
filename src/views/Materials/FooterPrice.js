import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

export default function SectionPreFooter() {
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const materialData = useSelector(state => state.esitmate);
    const allData = [...materialData.row1, ...materialData.row2, ...materialData.row3];
    useEffect(() => {
        let sumPrice = 0;
        allData.map(item => {
            return sumPrice += item.cost;
        });
        setTotalPrice(sumPrice)
    }, [])

    const showPrice = totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const classes = useStyles();
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
                    <h1 className="price-footer1">
                        <span>Expense Total : </span> $ {showPrice}
                    </h1>
                </div>
            </div>
        </div>
    );
}
