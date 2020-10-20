import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

export default function SectionPreFooter() {
  const { location: { pathname } } = useHistory()
  const classes = useStyles();
  return (
    <div>
      <div
        className={classNames(
          classes.socialLine,
          classes.textCenter,
          classes.dark,
          classes.bigIcons
        )}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={2} sm={2} md={2} className={classes.border}>
              <Link to="/">
                <Button
                  color="white"
                  simple
                  className={pathname === '/' ? 'current footer-linker' : 'footer-linker'}
                >
                  Estimate
              </Button>
              </Link>
            </GridItem>
            <GridItem xs={2} sm={2} md={2} className={classes.border}>
              <Link to="/materials">
                <Button
                  color="white"
                  simple
                  className={pathname === '/materials' ? 'current footer-linker' : 'footer-linker'}
                >
                  Materials
                </Button>
              </Link>
            </GridItem>
            <GridItem xs={2} sm={2} md={2} className={classes.border}>
              <Link to="/subpay">
                <Button
                  color="white"
                  simple
                  className={pathname === '/subpay' ? 'current footer-linker' : 'footer-linker'}
                >
                  SubPay
              </Button>
              </Link>
            </GridItem>
            <GridItem xs={2} sm={2} md={2} className={classes.border}>
              <Link to="/sales">
                <Button
                  color="white"
                  simple
                  className={pathname === '/sales' ? 'current footer-linker' : 'footer-linker'}
                >
                  Sales
              </Button>
              </Link>
            </GridItem>
            <GridItem xs={2} sm={2} md={2} className={classes.border}>
              <Link to="/export">
                <Button
                  color="white"
                  simple
                  className={pathname === '/export' ? 'current footer-linker' : 'footer-linker'}
                >
                  Export
              </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
