import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    // Clients list
    const cliets = [
        { clist: 'A TEST COMPANY' },
        { clist: 'AMAZON' },
        { clist: 'APPLE' },
        { clist: 'IBM' },
        { clist: 'INTEL' },
        { clist: "NETFLIX" },
        { clist: "NETLIFY" },
    ];
    // Version list
    const versions = [
        { version: 'Version 1' },
        { version: 'Version 2' },
        { version: 'Version 3' },
        { version: 'Version 4' },
        { version: 'Version 5' },
        { version: "Version 6" },
    ];
    return (
        <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem + " auto-1"}>
                <Autocomplete
                    options={cliets}
                    getOptionLabel={(option) => option.clist}
                    style={{ width: 240, marginRight: 15 }}
                    renderInput={(params) => <TextField {...params} label="Client" variant="outlined" />}
                />
            </ListItem>
            <ListItem className={classes.listItem + " auto-2"}>
                <Autocomplete
                    options={versions}
                    getOptionLabel={(option) => option.version}
                    style={{ width: 240, marginRight: 15 }}
                    renderInput={(params) => <TextField {...params} label="Version" variant="outlined" />}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
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
                <Link to="/presentation">
                    <IconButton aria-label="delete" className={classes.margin}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M22.5 0H1.5C0.672 0 0 0.672 0 1.5V2.5C0 3.328 0.672 4 1.5 4H2V16C1.448 16 1 16.448 1 17C1 17.552 1.448 18 2 18H10.4L7.192 22.412C6.867 22.859 6.966 23.484 7.412 23.809C7.86 24.136 8.486 24.035 8.809 23.589L11 20.575V23C11 23.552 11.448 24 12 24C12.552 24 13 23.552 13 23V20.575L15.191 23.588C15.517 24.037 16.143 24.132 16.588 23.808C17.034 23.483 17.133 22.858 16.808 22.411L13.6 18H22C22.552 18 23 17.552 23 17C23 16.448 22.552 16 22 16V4H22.5C23.328 4 24 3.328 24 2.5V1.5C24 0.672 23.328 0 22.5 0ZM20 16H4V4H20V16Z" fill="#fff" className="presentation-svg" /></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" /></clipPath></defs></svg>
                        <span className="presentation-label">Presentation</span>
                    </IconButton>
                </Link>
            </ListItem>
        </List>
    );
}

HeaderLinks.defaultProps = {
    hoverColor: "primary"
};

HeaderLinks.propTypes = {
    dropdownHoverColor: PropTypes.oneOf([
        "dark",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ])
};
