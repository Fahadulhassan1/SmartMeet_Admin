import Home from "./Home/VisitCards";
import Grid from "@mui/material/Grid";
import Drawer from "./Drawer";
import Box from "@mui/material/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Graph from "./Home/Graph";
import { green, red } from "@mui/material/colors";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import OutboundTwoToneIcon from "@mui/icons-material/OutboundTwoTone";
import ScheduleTwoToneIcon from "@mui/icons-material/ScheduleTwoTone";
function HomeScreen() {
  return (
    <>
      <Grid container>
        <Grid item xs={10} md={5} lg={3} sx={{ m: "auto" }}>
          <Home
            icon={<BeenhereIcon fontSize="large" sx={{ color: green[500] }} />}
            checkedIn_Visitors="Checked-In Visitors"
            numberOfVisitors={47}
            color="gray"
          />
        </Grid>
        <Grid item xs={10} md={5} lg={3} sx={{ m: "auto" }}>
          <Home
            icon={
              <OutboundTwoToneIcon fontSize="large" sx={{ color: red[500] }} />
            }
            checkedIn_Visitors="Checked-Out Visitors"
            numberOfVisitors={47}
            color="blue"
          />
        </Grid>
        <Grid item xs={10} md={5} lg={3} sx={{ m: "auto" }}>
          <Home
            icon={<ArrowUpwardIcon fontSize="large" />}
            checkedIn_Visitors="Attended Visitors"
            numberOfVisitors={47}
            color="lightgray"
          />
        </Grid>
        <Grid item xs={10} md={5} lg={3} sx={{ m: "auto" }}>
          <Home
            icon={<ScheduleTwoToneIcon fontSize="large" />}
            checkedIn_Visitors="Scheduled  Visitors"
            numberOfVisitors={47}
            color="purple"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeScreen;
