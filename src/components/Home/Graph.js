import * as React from "react";
import { Bar } from "react-chartjs-2";
import Box from "@mui/material/Box";
//import Grid from "@mui/material/Grid";
import axios
  from "axios";
import Card from "@mui/material/Card";
//import CardActionArea from "@mui/material/CardActionArea";
//import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CircularProgress from '@mui/material/CircularProgress';

import { Button, Divider, CardHeader, useTheme, colors } from "@mui/material";

function Graph(props) {
  const theme = useTheme();
var days; // Days you want to subtract
var date = new Date();
var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
var day = last.getDate();
var month = last.getMonth() + 1;
  var year = last.getFullYear();
  const [dates, setData] = React.useState("");
  
  React.useEffect(() => {
    axios
      .get(
        "https://pure-woodland-42301.herokuapp.com/api/admin/lastSevenDaysAppointments"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);
  console.log(dates)
  
    var thisWeek = [];
  var lastWeek = [];
  var thisweekdate = [];
  var lastweekdate = []
  if (dates) {
    for (var i = 0; i < 7; i++) {
      thisWeek.push(dates.thisweek[i].length);
      thisweekdate.push(dates.thisweek[i].today);
      lastWeek.push(dates.lastweek[i].length);
      lastweekdate.push(dates.lastweek[i].today30);
    }
  
  }
    console.log(thisweekdate);
    console.log(lastWeek);
  
    
        const data = {
          datasets: [
            {
              backgroundColor: colors.indigo[500],
              barPercentage: 0.5,
              barThickness: 12,
              borderRadius: 4,
              categoryPercentage: 0.5,
              data: dates ? thisWeek : [1, 1, 1, 1, 1, 1, 1],
              label: "This week",
              maxBarThickness: 10,
            },
            {
              backgroundColor: colors.grey[200],
              barPercentage: 0.5,
              barThickness: 12,
              borderRadius: 4,
              categoryPercentage: 0.5,
              data: dates ? lastWeek : [1, 1, 1, 1, 1, 1, 1],
              label: "Last week",
              maxBarThickness: 10,
            },
          ],
          labels: dates
            ? thisweekdate
            : [
                "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",]
              ,
        };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider,
          },
        },
      ],
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card {...props}>
      <CardHeader
        action={
          <Button size="small" variant="text">
            Last 14 days
          </Button>
        }
        title="Appointments"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        {/* <Button
          color="primary"
          // endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
          disabled
        >
          Overview
        </Button> */}
        <Typography
          color="primary"
          // endIcon={<ArrowRightIcon />}
          size="small"
        >
          Overview
        </Typography>
      </Box>
    </Card>
  );
}
export default Graph;
