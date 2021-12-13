import * as React from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";

const TrafficByDevice = (props) => {
  const [Data, setData] = React.useState("");
  React.useEffect(() => {
    axios
      .get("https://pure-woodland-42301.herokuapp.com/api/admin/circularGraph")
      .then((res) => {
        setData(res.data);
      });
  }, [Data]); 
console.log(Data);
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: Data ? Data  : [63, 15, 22] ,
        backgroundColor: [
          colors.green[600],
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["Employee","Finance", "Sales", "HR"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
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

  const devices = [
    {
      title: "Employee",
      value: Data? Data[0] : 0,
      icon: BusinessIcon,
      color: colors.green[500],
    },
    {
      title: "Finance",
      value: Data? Data[1] : 0,
      icon: BusinessIcon,
      color: colors.indigo[500],
    },
    {
      title: "Sales",
      value: Data? Data[2] : 0,
      icon: BusinessIcon,
      color: colors.red[600],
    },
    {
      title: "HR",
      value: Data? Data[3] : 0,
      icon: BusinessIcon,
      color: colors.orange[600],
    },
  ];

  return (
    <Card {...props}>
      <CardHeader title="Traffic by Department" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrafficByDevice;
