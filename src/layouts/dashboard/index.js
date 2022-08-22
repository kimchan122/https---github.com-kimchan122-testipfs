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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Card } from "react-bootstrap";
import AdvertisementList from "assets/theme/components/AdvertisementList";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  // const { sales, tasks } = reportsLineChartData;

  return (
    <div className="App">
      <DashboardLayout>
        <DashboardNavbar />
        <AdvertisementList />
      </DashboardLayout>
    </div>
    // <DashboardLayout>
    //   <DashboardNavbar />

    //   <MDBox py={1}>
    //     <MDBox mb={2}>
    //       <Grid container spacing={1}>
    //         <Grid item xs={6} md={8} lg={8}>
    //         </Grid>
    //       </Grid>
    //     </MDBox>
    //   </MDBox>
    //   <Footer />
    // </DashboardLayout>
  );
}

export default Dashboard;
