import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import image from "../../images/fahad.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import axios from "axios";

import View from "./View"
const useStyles = makeStyles((theme) => ({
  upperCard: {
    padding: 10,
    borderRadius: "10px 10px 0px 0px",
    marginRight: 40,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  },
  uppercardtypography: {
    color: "#00b59c",
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
    borderRadius: "10px 0px 0px 10px",
    "&:hover": {
      background: "#6DD585",
    },
  },
  btmbtnred: {
    color: "#fff",
    background: "#e85e5e",
    fontWeight: "bold",
    borderRadius: " 0px 10px 10px 0px",
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

  React.useEffect(() => {
    axios
      .get(
        "https://pure-woodland-42301.herokuapp.com/api/employee/allUser_Without_Acctivation"
      )
      .then((response) => {
        console.log(response);
        setdata(response.data);
      });
  }, [data]);

  return (
    <Grid container>
      <Grid item xs={10} style={{ margin: "auto" }}>
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
            <Grid item sm={4} xs={6} md={6} lg={3}>
              <Typography
                variant="body1"
                className={classes.bottomcardtypography}
              >
                Employee Name
              </Typography>
            </Grid>

            <Grid item sm={12} xs={12} md={2} lg={3}>
              <Typography
                variant="body1"
                className={classes.bottomcardtypography}
              >
                Email{""}
              </Typography>
            </Grid>
            <Grid item sm={4} xs={4} md={5} lg={2}>
              <Typography
                variant="body1"
                className={classes.bottomcardtypography}
              >
                PROFILE
              </Typography>
            </Grid>
            <Grid item sm={4} xs={6} md={4} lg={2}>
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
                return (
                  <div>
                    <RowBody
                      name={item.firstName + " " + item.lastName}
                      avatar={item.avatar}
                      email={item.email}
                      setdata={setdata}
                    />
                    <Divider />
                  </div>
                );
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

function RowBody({ avatar, name, email, setdata }) {
  const {getView , setView } = React.useState(false)
  const classes = useStyles();
  const action = (data) => {
    axios
      .post(
        "https://pure-woodland-42301.herokuapp.com/api/employee/verifyemail/" +
          email
      )
      .then((response) => {});
  };

  const accept = () => {
    axios
      .put(
        "https://pure-woodland-42301.herokuapp.com/api/employee/accept_employee/" +
          email
      )
      .then((res) => {
        setdata(null);
      });
  };
  const reject = () => {
    axios
      .put(
        "https://pure-woodland-42301.herokuapp.com/api/employee/reject_employee/" +
          email
      )
      .then((res) => {
        setdata(null);
      });
  };
  const view = () => {
    
      alert("Hello!");
  }
  return (
    <Grid container className={classes.rowbody} style={{ margin: "auto" }}>
      <Grid item sm={2} xs={2} md={4} lg={1} style={{ marginBottom: "10px" }}>
        <Avatar alt="Remy Sharp" src={avatar} />
      </Grid>
      <Grid item sm={6} xs={6} md={4} lg={2}>
        <Typography variant="body1" className={classes.bottomcardtypography}>
          {name}
        </Typography>
      </Grid>
      <Grid item sm={10} xs={10} md={4} lg={4}>
        <Typography variant="body1" className={classes.bottomcardtypography}>
          {email}
        </Typography>
      </Grid>
      <Grid item sm={3} xs={3} md={4} lg={2}>
        <Button className={classes.viewbtn}
        onClick={view}
        >
          <Typography
            variant="body1"
            className={classes.bottomcardtypography}
            style={{ color: "white" }}
          >
            View
          </Typography>
        </Button>
      </Grid>
      <Grid item sm={8} xs={8} md={4} lg={3}>
        <Grid container>
          <Grid item xs={4}>
            <Button
              variant="container"
              className={classes.btmbtngreen}
              fullWidth
              onClick={accept}
            >
              <Typography variant="body1">
                <DoneSharpIcon />
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="container"
              className={classes.btmbtnred}
              fullWidth
              onClick={reject}
            >
              <Typography variant="body1">
                <ClearSharpIcon />
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
