import { Grid } from "@mui/material";
import EditFromControl from "assets/theme/components/EditFormControl";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import { Card } from "react-bootstrap";

function EditInfo(){
    return (
        <DashboardLayout>
          <DashboardNavbar />
            <EditFromControl />
          <Footer />
        </DashboardLayout>
      );
}
export default EditInfo;