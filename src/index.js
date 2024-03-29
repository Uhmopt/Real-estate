/*!
=========================================================
* Marketnology -  v1.0.0
=========================================================
* Coded by Bohdan
=========================================================
*/
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router"; 
import "assets/scss/material-kit-pro-react.scss?v=1.9.0";  
// pages for this product
import PresentationPage from "views/Presentation/PresentationPage.js";
import MaterialsPage from "views/Materials/MaterialsPage.js";
import Estimate from "views/Estimate/EstimatePage";
import SubpayPage from "views/Subpay/SubpayPage";
import SalesPage from "views/Sales/SalesPage";
import "assets/css/custom.css";
import rootReducers from "./Store/reducers/rootReducers";

var hist = createBrowserHistory();
const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/presentation" component={PresentationPage} />
        <Route path="/materials" component={MaterialsPage} />
        <Route path="/subpay" component={SubpayPage} />
        <Route path="/sales" component={SalesPage} />
        <Route path="/" component={Estimate} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
