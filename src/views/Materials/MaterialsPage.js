/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderContral from "components/Header/HeaderContral.js";
import FooterPrice from "./FooterPrice";
import Footer from "components/Footer/Footer.js";
// sections for this page
import MaterialCard from "./MaterialCard";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div className="full">
      <Header
        color="dark"
        brand="Marketnology"
        links={<HeaderContral/>}
        fixed
      />
      <MaterialCard />
      <div className="fixed-footer">
        <FooterPrice />
        <Footer title="estimate" />
      </div>
    </div>
  );
}
