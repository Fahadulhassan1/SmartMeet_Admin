import * as React from 'react';
import InOutExpected from "./Home/InOutExpected";
import Grid from "@mui/material/Grid";
function lowerCards() {
    return (
      <>
        <Grid container sx={{ gap: 5 }} >
          <Grid item xs={8} md={5} lg={3.5} style={{ margin: "auto" }}>
            <InOutExpected typeOfCheck="Recently Checked In" />
          </Grid>
          <Grid xs={8} md={5} lg={3.5} style={{ margin: "auto" }}>
            <InOutExpected typeOfCheck="Recently Checked Out" />
          </Grid>
          <Grid xs={8} md={5} lg={3.5} style={{ margin: "auto" }}>
            <InOutExpected typeOfCheck="Expected Checked In" />
          </Grid>
        </Grid>
      </>
    );
}
export default lowerCards;