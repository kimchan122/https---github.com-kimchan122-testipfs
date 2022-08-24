import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VideoFromControl from "assets/theme/components/VideoFormControl";

function MakeAds() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VideoFromControl />
    </DashboardLayout>
  );
}

export default MakeAds;
