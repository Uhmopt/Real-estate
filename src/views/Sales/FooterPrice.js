import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

export default function SectionPreFooter() {
    const { innerWidth: width } = window;
    const phoneMaxwidth = 767.95;
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
                    <div className="price-footer2">
                        { width < phoneMaxwidth ? (
                            <div className="sales-phone-footer">
                                <p style={{ marginRight: 15 }}>Expected Profit : </p>
                                <h5>$ 1,950.00</h5>
                                <h4 style={{ marginLeft: 20 }}>
                                30 %</h4>
                            </div>
                        ): (
                            <div>
                                <span style={{ marginRight: 15 }}>Expected Profit : </span>
                                $ 1,950.00
                                <span style={{ marginLeft: 20 }}>30 %</span>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
