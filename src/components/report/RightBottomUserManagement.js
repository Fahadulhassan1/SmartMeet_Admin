import * as React from "react";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Table from "./Table";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
    background: "#572B77",
    color: "white",
    "&:hover": {
      backgroundColor: "#0D4F8C",
    },
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const RightBottomUserManagement = () => {
  const [data, setdata] = React.useState([]);
//get data from API endpoints
  React.useEffect(async () => {
    await axios
      .get("https://pure-woodland-42301.herokuapp.com/api/admin/appointments")
      .then((res) => {
        setdata(res.data);
      });
  }, []);

  const rows= [];
  var i = 1;
//map state in to arrays
  data.map((item) => {
    rows.push({
      id : i,
      AppointementAccepted: item.AppointementAccepted == true ? "Accepted" : item.AppointementAccepted == false && item.isRejected == false? "Pending" : "Rejected",
       isRejected: item.isRejected,
      employeeName: item.employeeName,
      Employee_email: item.Employee_email,
      employeeAvatar: item.employeeAvatar,
      VisitorName: item.VisitorName,
      // isWatchListed: item.isWatchListed,
      visitorEmail: item.visitorEmail,
      visitorAvatar: item.visitorAvatar,
      VisitorComapany: item.VisitorComapany,
      Date: item.Date.substring(0, 10),
      Timeslot: item.Timeslot,
      Message: item.Message,
    });
    i = i+1;
  });
  const columns = [
    {
      title: "S no",
      field: "id",
    },
    {
      title: "Employee Name",
      field: "employeeName",
    },
    {
      title: "Appointment Type",
      field: "AppointementAccepted",
      align: "center",
      cellStyle: { color: "#fff" },
      render: (rowData) => (
        <div
          style={{
            background:
              rowData.AppointementAccepted === "Accepted"
                ? "green"
                : rowData.AppointementAccepted === "Rejected"
                ? "red"
                  : rowData.AppointementAccepted === "Pending"
                  ? "#FFC107" : null,
            borderRadius: "5px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {rowData.AppointementAccepted}
        </div>
      ),
    },
    // {
    //   employeeAvatar: "Employee Image",
    //   field: "employeeAvatar"
    // },
    {
      title: "Employee Email",
      field: "Employee_email",
    },
    {
      title: "Visitor Name",
      field: "VisitorName",
    },
    // {
    //   visitorAvatar: "Visitor Image",
    //   field: "visitorAvatar"
    // },
    {
      title: "Visitor Email",
      field: "visitorEmail",
    },
    {
      title: "Visitor Comapany",
      field: "VisitorComapany",
    },
    {
      title: "Date",
      field: "Date",
    },
    {
      title: "Timeslot",
      field: "Timeslot",
    },
    {
      title: "Message",
      field: "Message",
    },
  ];

    



  const classes = useStyles();
  const rows1 = [
    {
      id: 1,
      name: "Martin Guptill",
      userType: "Student",
      status: "Active",
      dob: "4 June, 1999",
      contact: "0300786018",
      email: "guptill@gmail.com",
    },
    {
      id: 2,
      name: "Joe Williams",
      userType: "Alumni",
      status: "Banned",
      dob: "9 July, 1993",
      contact: "0300786018",
      email: "williams@gmail.com",
    },
    {
      id: 3,
      name: "Smith Joe",
      userType: "Student",
      status: "Pending",
      dob: "2 August, 1999",
      contact: "0300787248",
      email: "joe@gmail.com",
    },
    {
      id: 4,
      name: "Ross Taylor",
      userType: "Faculty",
      status: "Active",
      dob: "4 June, 1999",
      contact: "0300786018",
      email: "ross@gmail.com",
    },
    {
      id: 5,
      name: "Moin Khan",
      userType: "Student",
      status: "Banned",
      dob: "5 December, 2000",
      contact: "0300786018",
      email: "Moin@gmail.com",
    },
    {
      id: 6,
      name: "Eoin Morgan",
      userType: "Student",
      status: "Active",
      dob: "10 January, 2000",
      contact: "0300786018",
      email: "eoin@gmail.com",
    },
    {
      id: 7,
      name: "Ricky Ponting",
      userType: "Faculty",
      status: "Banned",
      dob: "29 May, 1986",
      contact: "0300786018",
      email: "ricky@gmail.com",
    },
    {
      id: 8,
      name: "Mark Waugh",
      userType: "Alumni",
      status: "Pending",
      dob: "29 May, 1990",
      contact: "03007820918",
      email: "mark@gmail.com",
    },
    {
      id: 9,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 10,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 11,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 12,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 13,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 14,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 15,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 16,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 17,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 18,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 19,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 20,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 21,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 22,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 23,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 24,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 25,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 26,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 27,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 28,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 29,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 30,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 31,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 32,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 33,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 34,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 35,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 36,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 37,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 38,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 39,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 40,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 41,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 42,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 43,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 44,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 45,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 46,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 47,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 48,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 49,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 50,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
    {
      id: 51,
      name: "Gillespie",
      userType: "Faculty",
      status: "Active",
      dob: "29 May, 1989",
      contact: "0300782048",
      email: "gillespie@gmail.com",
    },
    {
      id: 52,
      name: "Randy",
      userType: "Student",
      status: "Active",
      dob: "29 May, 1997",
      contact: "0315782018",
      email: "randye@gmail.com",
    },
  ];
  
  const columns1 = [
    {
      title: "S no",
      field: "id",
    },
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Type",
      field: "userType",
      cellStyle: { color: "#fff" },
      align: "center",
      render: (rowData) => (
        <div
          style={{
            background: rowData.userType ? "#572B77" : null,
            borderRadius: "5px",
            padding: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {rowData.userType}
        </div>
      ),
    },
    {
      title: "Status",
      field: "status",
      align: "center",
      cellStyle: { color: "#fff" },
      render: (rowData) => (
        <div
          style={{
            background:
              rowData.status === "Active"
                ? "#408140"
                : rowData.status === "Banned"
                ? "#DC3545"
                : rowData.status === "Pending"
                ? "#F7AC00"
                : null,
            borderRadius: "5px",
            padding: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {rowData.status}
        </div>
      ),
    },
    {
      title: "DOB",
      field: "dob",
    },
    {
      title: "Contact",
      field: "contact",
    },
    {
      title: "Email",
      field: "email",
    },
  ];
console.log(rows1)
  return (
    <>
     
      <Table rows={rows} columns={columns} title="All Users" />
    </>
  );
};
export default RightBottomUserManagement;

// import * as React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Toolbar from "@material-ui/core/Toolbar";
// import Paper from "@material-ui/core/Paper";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import MenuIcon from "@material-ui/icons/Menu";
// import PersonAddIcon from "@material-ui/icons/PersonAdd";
// import AppBar from "@material-ui/core/AppBar";
// import DataGrid from "../../GridTable";

// const rows = [
//   {
//     id: 1,
//     name: "Martin Guptill",
//     userType: "Student",
//     status: "Banned",
//     dob: "4 June, 1999",
//     contact: "0300786018",
//     email: "guptill@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Joe Williams",
//     userType: "Alumni",
//     status: "Pending",
//     dob: "9 July, 1993",
//     contact: "0300786018",
//     email: "williams@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Smith Joe",
//     userType: "Student",
//     status: "Active",
//     dob: "2 August, 1999",
//     contact: "0300787248",
//     email: "joe@gmail.com",
//   },
//   {
//     id: 4,
//     name: "Ross Taylor",
//     userType: "Faculty",
//     status: "Active",
//     dob: "4 June, 1999",
//     contact: "0300786018",
//     email: "ross@gmail.com",
//   },
//   {
//     id: 5,
//     name: "Moin Khan",
//     userType: "Student",
//     status: "Banned",
//     dob: "5 December, 2000",
//     contact: "0300786018",
//     email: "Moin@gmail.com",
//   },
//   {
//     id: 6,
//     name: "Eoin Morgan",
//     userType: "Student",
//     status: "Active",
//     dob: "10 January, 2000",
//     contact: "0300786018",
//     email: "eoin@gmail.com",
//   },
//   {
//     id: 7,
//     name: "Ricky Ponting",
//     userType: "Faculty",
//     status: "Banned",
//     dob: "29 May, 1986",
//     contact: "0300786018",
//     email: "ricky@gmail.com",
//   },
//   {
//     id: 8,
//     name: "Mark Waugh",
//     userType: "Alumni",
//     status: "Pending",
//     dob: "29 May, 1990",
//     contact: "03007820918",
//     email: "mark@gmail.com",
//   },
//   {
//     id: 9,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 10,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 11,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 12,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 13,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 14,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 15,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 16,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 17,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 18,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 19,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 20,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 21,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 22,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 23,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 24,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 25,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 26,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 27,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 28,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 29,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 30,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 31,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 32,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 33,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 34,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 35,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 36,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 37,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 38,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 39,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 40,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 41,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 42,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 43,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 44,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 45,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 46,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 47,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 48,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 49,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 50,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
//   {
//     id: 51,
//     name: "Gillespie",
//     userType: "Faculty",
//     status: "Active",
//     dob: "29 May, 1989",
//     contact: "0300782048",
//     email: "gillespie@gmail.com",
//   },
//   {
//     id: 52,
//     name: "Randy",
//     userType: "Student",
//     status: "Active",
//     dob: "29 May, 1997",
//     contact: "0315782018",
//     email: "randye@gmail.com",
//   },
// ];
// const columns = [
//   {
//     field: "id",
//     headerName: "Sno",
//     width: 105,
//   },
//   {
//     field: "name",
//     headerName: "Name",
//     width: 123,
//   },
//   {
//     field: "userType",
//     headerName: "Type",
//     width: 108,
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 117,
//   },
//   {
//     field: "dob",
//     headerName: "DoB",
//     width: 137,
//   },
//   {
//     field: "contact",
//     headerName: "Contact",
//     width: 128,
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     width: 180,
//   },
//   {
//     field: "",
//     headerName: "Actions",
//     width: 149,
//     renderCell: () => (
//       <div>
//         <OpenInNewIcon /> <BlockIcon /> <DeleteIcon />
//       </div>
//     ),
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // marginLeft: "270px",
//     // marginRight: "25px",
//     marginTop: "30px",
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//   },

//   title: {
//     flexGrow: 1,
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: theme.spacing(2),
//   },
//   content: {
//     margin: theme.spacing(2),
//     padding: theme.spacing(2),
//   },
//   buttonStyles: {
//     // marginLeft: "270px",
//     // marginRight: "25px",
//     // marginTop: "30px",
//     background: "#572B77",
//     color: "white",
//     "&:hover": {
//       backgroundColor: "#0D4F8C",
//     },
//     [theme.breakpoints.down("sm")]: {
//       marginLeft: "20px",
//     },
//     [theme.breakpoints.up("lg")]: {
//       marginRight: "30px",
//     },
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function MyApp() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.content}>
//         <div className={classes.toolbar}>
//           <Typography variant="h6" component="h2" color="primary">
//             Users
//           </Typography>
//           <Button
//             variant="contained"
//             color="secondary"
//             className={classes.buttonStyles}
//             startIcon={<PersonAddIcon />}
//           >
//             Import Users
//           </Button>
//         </div>
//         <div style={{ height: 400, width: "100%" }}>
//           <DataGrid rows={rows} columns={columns} checkboxSelection />
//         </div>
//       </Paper>
//     </div>
//   );
// }
