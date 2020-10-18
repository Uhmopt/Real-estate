/*!

=========================================================
* Marketnology -  v1.0.0
=========================================================

* Coded by Bohdan

=========================================================


*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/Presentation/PresentationPage.js";
import MaterialsPage from "views/Materials/MaterialsPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import Estimate from "views/Estimate/EstimatePage";
import SubpayPage from "views/Subpay/SubpayPage";
import SalesPage from "views/Sales/SalesPage";
import "assets/css/custom.css";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/ecommerce-page" component={EcommercePage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/shopping-cart-page" component={ShoppingCartPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/presentation" component={PresentationPage} />
      <Route path="/materials" component={MaterialsPage} />
      <Route path="/subpay" component={SubpayPage} />
      <Route path="/sales" component={SalesPage} />
      <Route path="/" component={Estimate} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
