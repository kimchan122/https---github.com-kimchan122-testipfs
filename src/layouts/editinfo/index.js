import EditFromControl from "assets/theme/components/EditFormControl";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

function EditInfo(){
    return (
        <DashboardLayout>
          <DashboardNavbar />
            <EditFromControl />
        </DashboardLayout>
      );
}
export default EditInfo;