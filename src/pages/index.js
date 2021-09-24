import React from "react";

import Grid from "@mui/material/Grid";
import HomeScreen from "../components/HomeScreen";
import Drawer from "../components/Drawer";
import VisitCards from "../components/Home/VisitCards";
import Graph from "../components/Home/Graph";
import CircularGraph from "../components/Home/CircularGraph";
// import InOutExpected from "../components/LowerCards"
import LowerCards from "../components/LowerCards";
function HomePage() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Drawer />
      </Grid>
      <Grid item xs={10} style={{ margin: "auto", marginTop: "70px" }}>
        <HomeScreen />
        <Grid
          container
          style={{ marginTop: "10px" }}
          sx={{
            columnGap: 5,
            rowGap: 5,
          }}
        >
          <Grid item xs={12} md={10} lg={7} sx={{ m: "auto" }}>
            <Graph />
          </Grid>
          <Grid item xs={12} md={10} lg={4} sx={{ m: "auto" }}>
            <CircularGraph />
          </Grid>
        </Grid>
        <div style={{ marginTop: "20px" }}>
          <LowerCards />
        </div>
      </Grid>
    </Grid>
  );
}
export default HomePage;
