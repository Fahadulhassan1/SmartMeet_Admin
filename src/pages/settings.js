import React from "react";

import Grid from "@mui/material/Grid";
//import UsersCard from "../components/EmployeeApproval/EmployeeApprovalList";
import Drawer from "../components/Drawer";
import { SettingsVoiceOutlined } from "@material-ui/icons";
import ChangePassword from "../components/Settings/ChangePassword2"
function Settings() {
  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Drawer />
        </Grid>

        <Grid item xs={11} style={{ marginTop: 70 }}>
          <ChangePassword/>
        </Grid>
      </Grid>
    </>
  );
}
export default Settings;