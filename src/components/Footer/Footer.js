import React from "react";
import { useHistory } from "react-router";
// nodejs library that concatenates classes
import classNames from "classnames";
import List from "@material-ui/core/List";
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
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <List to="/">
                <Button
                  color="white"
                  simple
                  className={pathname === '/' ? 'current footer-linker' : 'footer-linker'}
                >
                  Estimate
              </Button>
              </List>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <List to="/materials">
                <Button
                  color="white"
                  simple
                  className={pathname === '/materials' ? 'current footer-linker' : 'footer-linker'}
                >
                  Materials
                </Button>
              </List>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <List to="/subpay">
                <Button
                  color="white"
                  simple
                  className={pathname === '/subpay' ? 'current footer-linker' : 'footer-linker'}
                >
                  SubPay
              </Button>
              </List>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <List to="/sales">
                <Button
                  color="white"
                  simple
                  className={pathname === '/sales' ? 'current footer-linker' : 'footer-linker'}
                >
                  Sales
              </Button>
              </List>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <List to="/export">
                <Button
                  color="white"
                  simple
                  className={pathname === '/export' ? 'current footer-linker' : 'footer-linker'}
                >
                  Export
              </Button>
              </List>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
