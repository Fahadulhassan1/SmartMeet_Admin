import React from "react";

import Grid from "@mui/material/Grid";
//import UsersCard from "../components/EmployeeApproval/EmployeeApprovalList";
import Drawer from "../components/Drawer";
import { SettingsVoiceOutlined } from "@material-ui/icons";
import ChangePassword from "../components/Settings/ChangePassword2";
import Alert from "../components/Settings/alertToAll";
import CustomNotification from "../components/Settings/sendCustomNotification";  
function Settings() {
  return (
    <>
      <Grid container>
        <Grid item xs={1} lg={1}>
          <Drawer />
        </Grid>
        <Grid item lg={4} xs={10} style={{ marginTop: 80 }}>
          <Alert />
        </Grid>
        <Grid item lg={7} xs={12} style={{ marginTop: 70 }}>
          <CustomNotification />
        </Grid>
        <Grid item lg={12} xs={12} style={{ marginTop: 70 }}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
}
export default Settings;
