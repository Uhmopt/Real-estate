import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

export default function SectionPreFooter() {
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
                        <span style={{marginRight: 15}}>Expected Profit : </span>$ 1,950.00<span style={{marginLeft: 20}}>30 %</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
