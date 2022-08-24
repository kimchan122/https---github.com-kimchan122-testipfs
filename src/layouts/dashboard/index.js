import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import AdvertisementList from "assets/theme/components/AdvertisementList";

function Dashboard() {
  return (
    <div className="App">
      <DashboardLayout>
        <DashboardNavbar />
        <AdvertisementList />
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;
