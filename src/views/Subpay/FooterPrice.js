import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);
export default function SectionPreFooter() {
    const totalSubpay = useSelector(state => state.subPay.totalSubPay);
    const [total, setTotal] = useState(totalSubpay);

    useEffect( () => {
        setTotal(totalSubpay.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    }, [totalSubpay])
    
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
                        <span>Subpay Cost : </span>$ {total}
                    </h1>
                </div>
            </div>
        </div>
    );
}
