import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

import axios from "axios";
import Search from "../searchBar/SearchBar";
const useStyles = makeStyles((theme) => ({
  upperCard: {
    padding: 10,
    borderRadius: "10px 10px 0px 0px",
    marginRight: 40,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  },
  uppercardtypography: {
    color: "#808080	",
    fontWeight: "bold",
  },
  bottomCard: {
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    borderRadius: 20,
    padding: 25,
  },
  rowheader: {
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    background: "blue",
    borderRadius: 20,
    color: "#fff",
    fontWeight: "bold",
    padding: 20,
  },
  bottomcardtypography: {
    fontWeight: "bold",
    textAlign: "left",
  },
  listCard: {
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    marginTop: 30,
    height: "65vh",
    overflowY: "scroll",
  },
  rowbody: {
    color: "black",
    padding: 20,
    marginTop: 10,
  },
  btncontainer: {
    color: "#fff",
  },
  btmbtngreen: {
    color: "#fff",
    background: "#2fc452",
    fontWeight: "bold",
    borderRadius: "10px 10px 10px 10px",
    "&:hover": {
      background: "#6DD585",
    },
  },
  btmbtnred: {
    color: "#fff",
    background: "#e85e5e",
    fontWeight: "bold",
    borderRadius: " 10px 10px 10px 10px",
    "&:hover": {
      background: "#ee8b8b",
    },
  },
  viewbtn: {
    backgroundColor: "blue",
    "&:hover": {
      background: "#6666FF",
    },
  },
}));

export default function UsersCard() {
  const classes = useStyles();
  const [data, setdata] = React.useState(null);
  const [search, setsearch] = React.useState("");
  console.log(search);
  React.useEffect(() => {
    axios
      .get("https://pure-woodland-42301.herokuapp.com/api/employee/allUsers")
      .then((response) => {
        // console.log(response);
        setdata(response.data);
      });
  }, [data]);

  return (
    <Grid container>
      <Grid container xs={11}>
        <Grid container direction="row" justifyContent="center">
          <Stack
            spacing={2}
            sx={{ width: 600 }}
            style={{ borderRadius: "10px 10px 0px 0px" }}
          >
            <TextField
              style={{
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
              }}
              label="Serach"
              onChange={(e) => setsearch(e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid container direction = "row-reverse">
         
            <Card className={classes.upperCard}>
              <Typography variant="h5" className={classes.uppercardtypography}>
                View Employees Details
              </Typography>
            </Card>
        
        </Grid>
      </Grid>
      <Grid item xs={11} style={{ margin: "auto" }}>
        <Card className={classes.bottomCard}>
          <Grid container className={classes.rowheader} sx={{ m: "auto" }}>
            <Grid item sm={2} xs={3} md={4} lg={1}>
              <Typography
                variant="body1"
                className={classes.bottomcardtypography}
              >
                Avatar
              </Typography>
            </Grid>
            <Grid item sm={4} xs={6} md={6} lg={2} style={{ margin: "auto" }}>
              <Typography
                variant="body1"
                className={classes.bottomcardtypography}
              >
                Employee Name
              </Typography>
            </Grid>
            <Grid item sm={4} xs={4} md={5} lg={2} style={{ margin: "auto" }}>
              <Typography
                variant="body1"
                className={classes.bottomcardtypography}
              >
                User Name
              </Typography>
            </Grid>
            <Grid item sm={12} xs={12} md={2} lg={3} style={{ margin: "auto" }}>
              <Typography
                variant="body1"
                className={classes.bottomcardtypography}
              >
                Email{""}
              </Typography>
            </Grid>

            <Grid item sm={2} xs={3} md={2} lg={2} style={{ margin: "auto" }}>
              <Typography
                variant="body1"
                className={classes.bottomcardtypography}
              >
                DOB
              </Typography>
            </Grid>
            <Grid item sm={2} xs={3} md={2} lg={2} style={{ margin: "auto" }}>
              <Typography
                variant="body1"
                className={classes.bottomcardtypography}
              >
                ACTION
              </Typography>
            </Grid>
          </Grid>
          <Card className={classes.listCard}>
            {data ? (
              data.map((item) => {
                if (search.length > 0) {
                  if (
                    item.firstName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return (
                      <div>
                        <RowBody
                          name={item.firstName + " " + item.lastName}
                          avatar={item.avatar}
                          email={item.email}
                          username={item.username}
                          dateOfBirth={item.dateOfBirth}
                          id={item._id}
                          setdata={setdata}
                        />
                        <Divider />
                      </div>
                    );
                  }
                } else {
                  return (
                    <div>
                      <RowBody
                        name={item.firstName + " " + item.lastName}
                        avatar={item.avatar}
                        email={item.email}
                        username={item.username}
                        dateOfBirth={item.dateOfBirth}
                        id={item._id}
                        setdata={setdata}
                      />
                      <Divider />
                    </div>
                  );
                }
              })
            ) : (
              <div></div>
            )}
          </Card>
        </Card>
      </Grid>
    </Grid>
  );
}

function RowBody({ avatar, name, email, username, dateOfBirth, id, setdata }) {
  const classes = useStyles();

  const deleteEmployee = () => {
    axios
      .delete(
        "https://pure-woodland-42301.herokuapp.com/api/employee/deleteAccount/" +
          id
      )
      .then((res) => {
        setdata(null);
      });
  };

  return (
    <Grid container className={classes.rowbody} style={{ margin: "auto" }}>
      <Grid item sm={2} xs={2} md={4} lg={1} style={{ margin: "auto" }}>
        <Avatar alt="Remy Sharp" src={avatar} />
      </Grid>
      <Grid item sm={6} xs={6} md={4} lg={2} style={{ margin: "auto" }}>
        <Typography variant="body1" className={classes.bottomcardtypography}>
          {name}
        </Typography>
      </Grid>
      <Grid item sm={6} xs={6} md={4} lg={2} style={{ margin: "auto" }}>
        <Typography variant="body1" className={classes.bottomcardtypography}>
          {username}
        </Typography>
      </Grid>
      <Grid item sm={10} xs={10} md={4} lg={3} style={{ margin: "auto" }}>
        <Typography variant="body1" className={classes.bottomcardtypography}>
          {email}
        </Typography>
      </Grid>
      <Grid item sm={10} xs={10} md={4} lg={2} style={{ margin: "auto" }}>
        <Typography variant="body1" className={classes.bottomcardtypography}>
          {dateOfBirth}
        </Typography>
      </Grid>
      <Grid item sm={8} xs={8} md={4} lg={2}>
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant="container"
              className={classes.btmbtnred}
              fullWidth
              onClick={deleteEmployee}
            >
              <Typography variant="body">Delete Account</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
