// import "./styles.css";
import Grid from "@mui/material/Grid"
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import ResponsiveDrawer from "./Major Components/ResponsiveDrawer";

const data = [
  {
    name: "CS",
    uv: 4000,
    Users: 2400,
    amt: 2400,
  },
  {
    name: "SE",
    uv: 3000,
    Users: 1398,
    amt: 2210,
  },
  {
    name: "Architecture",
    uv: 2000,
    Users: 9800,
    amt: 2290,
  },
  {
    name: "EE",
    uv: 2780,
    Users: 3908,
    amt: 2000,
  },
  {
    name: "BBA",
    uv: 1890,
    Users: 4800,
    amt: 2181,
  },
  {
    name: "Psychology",
    uv: 2390,
    Users: 3800,
    amt: 2500,
  },
  {
    name: "CE",
    uv: 3490,
    Users: 4300,
    amt: 2100,
  },
];

export default function App() {
  return (
    <Grid container>
      <Grid item xs = {11}>
        <ResponsiveContainer  height={400}>
          <LineChart
            width={600}
            height={300}
            data={data}
            style={{ border: "1px solid black" }}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Users"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
}
