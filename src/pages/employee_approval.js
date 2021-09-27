import React from "react";

import Grid from "@mui/material/Grid";
import UsersCard from "../components/EmployeeApproval/EmployeeApprovalList";
import Drawer from "../components/Drawer";
import Page from "../pages/index (1)";
function EmployeeApproval() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Drawer />
      </Grid>
      <Grid item xs={11} style={{ marginTop: 70 }}>
        <UsersCard />
      </Grid>
    </Grid>
  );
}
export default EmployeeApproval;
