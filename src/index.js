/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "App";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import MetamaskProvider from "features/MetamaskProvider";

import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const getLibrary = (provider) => new Web3Provider(provider);

ReactDOM.render(
  <HashRouter>
    <MaterialUIControllerProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <App />
        </MetamaskProvider>
      </Web3ReactProvider>
    </MaterialUIControllerProvider>
  </HashRouter>,
  document.getElementById("root")
);
