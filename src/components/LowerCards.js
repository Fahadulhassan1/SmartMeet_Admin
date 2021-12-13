import * as React from "react";
import InOutExpected from "./Home/expectedAppointments";
import RecentCheckedIn from "./Home/recentlyCheckedIn";
import RecentCheckedOut from "./Home/RecentlyCheckedOut";
import Grid from "@mui/material/Grid";
import axios from "axios";
function LowerCards() {
  const [data, setdata] = React.useState(null);
  const [recentCheckedIn, setRecentCheckIn] = React.useState("");
  const [recentCheckedOut, setRecentCheckOut] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(
        "https://pure-woodland-42301.herokuapp.com/api/admin/nextDayAppointments"
      )
      .then((response) => {
        setdata(response.data);
      });
  }, [data]);
  React.useEffect(() => {
    axios
      .get(
        "https://pure-woodland-42301.herokuapp.com/api/admin/checkedInAppointments"
      )
      .then((response) => {
        setRecentCheckIn(response.data);
      });
  }, [recentCheckedIn]);
  console.log("recent ch" + recentCheckedIn);
  React.useEffect(async() => {
    await axios
      .get(
        "https://pure-woodland-42301.herokuapp.com/api/admin/nextDayAppointments"
      )
      .then((response) => {
        setRecentCheckOut(response.data);
      });
  }, [recentCheckedOut]);

  return (
    <>
      <Grid container sx={{ gap: 5 }}>
        <Grid item xs={8} md={5} lg={3.5} style={{ margin: "auto" }}>
          <RecentCheckedIn
            typeOfCheck="Recently Checked In"
            recentCheckedIn={recentCheckedIn}
          />
        </Grid>
        <Grid xs={8} md={5} lg={3.5} style={{ margin: "auto" }}>
          <RecentCheckedOut
            typeOfCheck="Recently Checked Out"
            recentCheckedOut={recentCheckedOut}
          />
        </Grid>
        <Grid xs={8} md={5} lg={3.5} style={{ margin: "auto" }}>
          <InOutExpected typeOfCheck="Expected Checked In" data={data} />
        </Grid>
      </Grid>
    </>
  );
}
export default LowerCards;
