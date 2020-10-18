import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import CancelIcon from '@material-ui/icons/Cancel';

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem + " auto-1"}>
                <h5 className="text-style-9">Test Client 1</h5>
            </ListItem>
            <ListItem className={classes.listItem}>
                <h5 className="text-style-9">Version 1.0</h5>
            </ListItem>
            <ListItem className={classes.listItem + " auto-2"}>
                <Button
                    color="success"
                    target="_blank"
                    className={classes.navButton}
                    style={{ marginRight: 10 }}
                >
                    <SaveIcon className={classes.icons} /> Save
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to="/">
                    <IconButton aria-label="delete" className={classes.margin} style={{padding: 16}}>
                        <CancelIcon />
                        <span className="presentation-label">Back</span>
                    </IconButton>
                </Link>
            </ListItem>
        </List>
    );
}