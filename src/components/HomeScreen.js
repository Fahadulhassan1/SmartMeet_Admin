import Home from "./Home/VisitCards";
import Grid from "@mui/material/Grid";
import * as React from "react";
import axios from "axios";
//import Drawer from "./Drawer";
//import Box from "@mui/material/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
//import Graph from "./Home/Graph";
import { green, red } from "@mui/material/colors";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import OutboundTwoToneIcon from "@mui/icons-material/OutboundTwoTone";
import ScheduleTwoToneIcon from "@mui/icons-material/ScheduleTwoTone";
function HomeScreen() {
  const [scheduledVisitorsdata, setSceduledvisitors] = React.useState("0");
  const [checkedIn_Visitors, setCheckedIn_Visitors] = React.useState("0");
  const [checkedOut_Visitors, setCheckedOut_Visitors] = React.useState("0");

  React.useEffect(() => {
    axios
      .get(
        "https://pure-woodland-42301.herokuapp.com/api/admin/nextDayAppointmentscounting"
      )
      .then((response) => {
        //console.log(response);
        setSceduledvisitors(response.data);
      });
  }, [scheduledVisitorsdata]);
  React.useEffect(() => {
    axios
      .get(
        "https://pure-woodland-42301.herokuapp.com/api/admin/last_TwentyfourHoursCheckedInAppointmentscounting"
      )
      .then((response) => {
        //console.log(response);
        setCheckedIn_Visitors(response.data);
      });
  }, [checkedIn_Visitors]);

  React.useEffect(() => {
    axios
      .get(
        "https://pure-woodland-42301.herokuapp.com/api/admin/last_TwentyfourHoursCheckedOutAppointmentscounting"
      )
      .then((response) => {
        //console.log(response);
        setCheckedOut_Visitors(response.data);
      });
  }, [checkedOut_Visitors]);
  return (
    <>
      <Grid container>
        <Grid item xs={10} md={5} lg={4} sx={{ m: "auto" }}>
          <Home
            icon={<BeenhereIcon fontSize="large" sx={{ color: green[500] }} />}
            checkedIn_Visitors="Checked-In Visitors"
            numberOfVisitors={checkedIn_Visitors == 0 ? 0 : checkedIn_Visitors}
            color="gray"
          />
        </Grid>
        <Grid item xs={10} md={5} lg={4} sx={{ m: "auto" }}>
          <Home
            icon={
              <OutboundTwoToneIcon fontSize="large" sx={{ color: red[500] }} />
            }
            checkedIn_Visitors="Checked-Out Visitors"
            numberOfVisitors={
              checkedOut_Visitors == 0 ? 0 : checkedOut_Visitors
            }
            color="blue"
          />
        </Grid>
        {/* <Grid item xs={10} md={5} lg={3} sx={{ m: "auto" }}>
          <Home
            icon={<ArrowUpwardIcon fontSize="large" />}
            checkedIn_Visitors="Attended Visitors"
            numberOfVisitors={47}
            color="lightgray"
          />
        </Grid> */}
        <Grid item xs={10} md={5} lg={4} sx={{ m: "auto" }}>
          <Home
            icon={<ScheduleTwoToneIcon fontSize="large" />}
            checkedIn_Visitors="Scheduled  Visitors"
            numberOfVisitors={
              scheduledVisitorsdata == 0 ? 0 : scheduledVisitorsdata
            }
            color="purple"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeScreen;
