import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

export default function SectionPreFooter() {

    const groupsData = useSelector(state => state.group.groupData);
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        let sumPrice = 0;
        groupsData.map( item  => {
            if (item.optional) {
                item.products.map(index => {
                    sumPrice += index.cost
                    return item;
                })
            }
            return groupsData;
        })
        setTotalPrice(sumPrice);
    }, [groupsData])
    
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
                    $ {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </h1>
                </div>
            </div>
        </div>
    );
}
