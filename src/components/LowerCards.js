import * as React from 'react';
import InOutExpected from "./Home/InOutExpected";
import Grid from "@mui/material/Grid";
import axios from "axios";
import {useState} from "react"
function LowerCards() {
  const [data, setdata] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(
        "https://pure-woodland-42301.herokuapp.com/api/admin/nextDayAppointments"
      )
      .then((response) => {
        console.log(response);
        setdata(response.data);
      });
  }, [data]);

    return (
      <>
        <Grid container sx={{ gap: 5 }} >
          <Grid item xs={8} md={5} lg={3.5} style={{ margin: "auto" }}>
            <InOutExpected typeOfCheck="Recently Checked In"  />
          </Grid>
          <Grid xs={8} md={5} lg={3.5} style={{ margin: "auto" }}>
            <InOutExpected typeOfCheck="Recently Checked Out" />
          </Grid>
          <Grid xs={8} md={5} lg={3.5} style={{ margin: "auto" }}>
            <InOutExpected typeOfCheck="Expected Checked In" setdata={setdata} data={ data}/>
          </Grid>
        </Grid>
      </>
    );
}
export default LowerCards;