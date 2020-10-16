/* eslint-disable */
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
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const smoothScroll = (e, target) => {
        if (window.location.pathname === "/sections") {
            var isMobile = navigator.userAgent.match(
                /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
            );
            if (isMobile) {
                // if we are on mobile device the scroll into view will be managed by the browser
            } else {
                e.preventDefault();
                var targetScroll = document.getElementById(target);
                scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
            }
        }
    };
    const scrollGo = (element, to, duration) => {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function () {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };
    var onClickSections = {};

    const { dropdownHoverColor } = props;
    const classes = useStyles();
    // Clients list
    const cliets = [
        { clist: 'Test 1234' },
        { clist: 'Test 1234' },
        { clist: 'Test 1234' },
        { clist: 'Test 1234' },
        { clist: 'Test 1234' },
        { clist: "Test 1234" },
    ];
    // Version list
    const versions = [
        { version: 'version 1' },
        { version: 'version 2' },
        { version: 'version 3' },
        { version: 'version 4' },
        { version: 'version 5' },
        { version: "version 6" },
    ];
    return (
        <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
                <Autocomplete
                    id="combo-box-demo"
                    options={cliets}
                    getOptionLabel={(option) => option.clist}
                    style={{ width: 240, marginRight: 15 }}
                    renderInput={(params) => <TextField {...params} label="Client" variant="outlined" />}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Autocomplete
                    id="combo-box-demo"
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
                    style={{marginRight: 10}}
                >
                    <SaveIcon className={classes.icons} /> Save
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <IconButton aria-label="delete" className={classes.margin}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M22.5 0H1.5C0.672 0 0 0.672 0 1.5V2.5C0 3.328 0.672 4 1.5 4H2V16C1.448 16 1 16.448 1 17C1 17.552 1.448 18 2 18H10.4L7.192 22.412C6.867 22.859 6.966 23.484 7.412 23.809C7.86 24.136 8.486 24.035 8.809 23.589L11 20.575V23C11 23.552 11.448 24 12 24C12.552 24 13 23.552 13 23V20.575L15.191 23.588C15.517 24.037 16.143 24.132 16.588 23.808C17.034 23.483 17.133 22.858 16.808 22.411L13.6 18H22C22.552 18 23 17.552 23 17C23 16.448 22.552 16 22 16V4H22.5C23.328 4 24 3.328 24 2.5V1.5C24 0.672 23.328 0 22.5 0ZM20 16H4V4H20V16Z" fill="#5C5C5C"/></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                </IconButton>
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
