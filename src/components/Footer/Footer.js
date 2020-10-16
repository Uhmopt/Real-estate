import React from "react";
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
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Estimate
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Materials
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                SubPay
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Sales
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Export
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
