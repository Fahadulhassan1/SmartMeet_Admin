import React from "react";

import Grid from "@mui/material/Grid";
//import UsersCard from "../components/EmployeeApproval/EmployeeApprovalList";
import Drawer from "../components/Drawer";
import RightBottomUserManagement from "../components/report/RightBottomUserManagement";
import Check from "../components/report/chart";

import UsersCard from "../components/EmployeeApproval/EmployeeApprovalList";
import LowerCards from "../components/LowerCards";

function Reports() {
  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Drawer />
        </Grid>

        <Grid item xs={11} style={{ marginTop: 70 }}>
          <RightBottomUserManagement />
        </Grid>
      </Grid>
    </>
  );
}
export default Reports;
