import * as React from "react";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  upperCard: {
    padding: 10,
    borderRadius: "10px 10px 0px 0px",
    marginRight: 40,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  },
  uppercardtypography: {
    color: "#808080",
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
  const [search, setsearch] = React.useState("");

  React.useEffect(() => {
    axios
      .get(
        "https://pure-woodland-42301.herokuapp.com/api/employee/allUser_Without_Acctivation"
      )
      .then((response) => {
        //console.log(response);
        setdata(response.data);
      });
  }, [data]);

  return (
    <Grid container>
      <Grid item xs={11}>
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
              label="Serach Employee Request"
              onChange={(e) => setsearch(e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid container direction="row-reverse">
          <Card className={classes.upperCard}>
            <Typography variant="h5" className={classes.uppercardtypography}>
              Employees Verification Request
            </Typography>
          </Card>
        </Grid>
      </Grid>
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
                          phoneNumber={item.phoneNumber}
                          username={item.username}
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
                        phoneNumber={item.phoneNumber}
                        username={item.username}
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

function RowBody({ avatar, name, email, phoneNumber ,username,setdata }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
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
  };
  return (
    <Grid container className={classes.rowbody} style={{ margin: "auto" }}>
      <Grid item sm={2} xs={2} md={4} lg={1} style={{ marginBottom: "10px" }}>
        <Avatar alt="Remy Sharp" src={avatar} />
      </Grid>
      <Grid item sm={6} xs={6} md={4} lg={3}>
        <Typography variant="body1" className={classes.bottomcardtypography}>
          {name}
        </Typography>
      </Grid>
      <Grid item sm={10} xs={10} md={4} lg={3}>
        <Typography variant="body1" className={classes.bottomcardtypography}>
          {email}
        </Typography>
      </Grid>
      <Grid item sm={3} xs={3} md={4} lg={2}>
        <Button className={classes.viewbtn} onClick={handleOpen}>
          <Typography style={{ color: "white" }}>View</Typography>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid container sx={style}>
            <Grid container>
              <Grid item xs={4}>
                <Avatar
                  sx={{ width: 100, height: 100, mb: "20px" }}
                  alt="Remy Sharp"
                  src={avatar}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5">{name}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ m: "5px" }}>
              <Typography variant="body1">User Name: {username}</Typography>
            </Grid>

            <Grid item xs={12} sx={{ m: "5px" }}>
              <Typography variant="body">Email: {email}</Typography>
            </Grid>
            <Grid item xs={12} sx={{ m: "5px" }}>
              <Typography variant="body">
                Phone Number: {phoneNumber}
              </Typography>
            </Grid>
            <Grid item sx={{ m: "5px" }}>
              <Typography variant="body">
                Office Address: XYZ Address
              </Typography>
            </Grid>
          </Grid>
        </Modal>
      </Grid>
      <Grid item sm={8} xs={8} md={4} lg={3}>
        <Grid container>
          <Grid item xs={4}>
            <Button
              variant="container"
              className={classes.btmbtngreen}
              style={{
                color: "#fff",
                background: "#2fc452",
                fontWeight: "bold",
                borderRadius: "10px 0px 0px 10px",
                "&:hover": {
                  background: "#6DD585",
                },
              }}
              fullWidth
              onClick={accept}
            >
              <Typography
                variant="body1"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <DoneSharpIcon />
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="container"
              className={classes.btmbtnred}
              style={{
                color: "#fff",
                background: "#e85e5e",
                fontWeight: "bold",
                borderRadius: " 0px 10px 10px 0px",
                "&:hover": {
                  background: "#ee8b8b",
                },
              }}
              fullWidth
              onClick={reject}
            >
              <Typography variant="body1" align="center">
                <ClearSharpIcon />
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
