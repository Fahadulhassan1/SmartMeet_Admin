import React from "react";

import Grid from "@mui/material/Grid";
import UsersCard from "../components/EmployeeApproval/EmployeeApprovalList";
import Drawer from "../components/Drawer";
import Page from "../pages/index (1)";
import Employeedetail from "../components/EmployeeDetails/Employeecard";
import VisitorsDetail from "../components/VisitorDetails/VisitorDetails"

function VisitorDetail() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Drawer />
      </Grid>
      <Grid item xs={11} style={{ marginTop: 70 }}>
        <VisitorsDetail />
      </Grid>
    </Grid>
  );
}
export default VisitorDetail;
