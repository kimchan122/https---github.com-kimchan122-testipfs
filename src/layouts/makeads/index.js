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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import { Form } from "react-bootstrap";
import VideoFromControl from "assets/theme/components/VideoFormControl";
// import DragDrop from "assets/theme/components/DragDrop/DragDrop";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

// import Button from "@mui/material/Button";

// import * as IPFS from "ipfs";

function MakeAds() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  // const run = async () => {
  //   const ipfs = await IPFS.create();
  //   //console.log(await ipfs.files.chmod('/QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn', '777'));
  //   console.log(await ipfs.files.stat('/UNCHAINADS'));
  //   console.log(await ipfs.files.ls('/UNCHAINADS'));
  // }
  // const run = async (files) => {
  //   const ipfs = await IPFS.create();
  //   console.log(ipfs);
  //   //const cid = await ipfs.files.mkdir('/EXIDSdd');
  //   //console.log(cid);
  //   const stat = await ipfs.files.stat("/EXIDSdd");
  //   console.log(stat);
  //   const ls = await ipfs.files.ls('/EXIDSdd');
  //   console.log(ls);
  //   // const write = awiat ipfs.files.write("")?
  // }
  // run();

  // run();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VideoFromControl />
      <Footer />
    </DashboardLayout>
  );
}

export default MakeAds;
