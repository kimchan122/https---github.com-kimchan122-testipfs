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

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { background } = colors;
const { borderRadius } = borders;

const sidenav = {
  styleOverrides: {
    root: {
      width: pxToRem(200),
      whiteSpace: "nowrap",
      border: "none",
      zindex: "-100",
    },

    paper: {
      width: pxToRem(200),
      backgroundColor: background.sidenav,
      height: '100vh',
      //margin: pxToRem(16),
      //borderRadius: borderRadius.xl,
      zindex: "-100",
      border: "none",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
      zindex: "1",
    },
  },
};

export default sidenav;
