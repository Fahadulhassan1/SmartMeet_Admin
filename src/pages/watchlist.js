import React from "react";

import Grid from "@mui/material/Grid";
import Drawer from "../components/Drawer";
import Watchlist from "../components/Watchlist/Watchlist_Visitors"
function EmployeeApproval() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Drawer />
      </Grid>
      <Grid item xs={11} style={{ marginTop: 70 }}>
        <Watchlist />
      </Grid>
    </Grid>
  );
}
export default EmployeeApproval;
