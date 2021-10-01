import * as React from "react";
import InOutExpected from "./Home/InOutExpected";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Typography from "@mui/material/Typography";
function LowerCardsdetail({ name , Timeslot , department}) {
    return (
      <Grid container>
        <Grid item >
          {name} 
        </Grid>
        <Grid item style={{ margin: "20px" }}>
        {department}
        </Grid>
        <Grid item>
          {Timeslot} 
        </Grid>
      </Grid>
    );

    
}
export default LowerCardsdetail;