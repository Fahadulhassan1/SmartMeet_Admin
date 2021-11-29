import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid, Typography } from "@material-ui/core";

import iseeLogo from "../Assets/isee logo white-01.png";
import blood from "../Assets/blood.svg";
import chat from "../Assets/chat (1).svg";
import report from "../Assets/document.svg";
import exit from "../Assets/exit.svg";
import heart from "../Assets/heart.svg";
import user from "../Assets/user (2).svg";
import doctor from "../Assets/doctor-female.png";
import classify from "../Assets/ISEE-01.png";
import appointment from "../Assets/appointment.png"
import dashboard from "../Assets/dashboard.png";

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { logout } from "../pages/statesSlice";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerClose: {
    backgroundColor: "#1061B0",
    color: "#1061B0",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(10) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(12) + 1,
    },
    "&:hover": {
      width: drawerWidth,
      backgroundColor: "#1061B0",
      color: "#fff",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  toolbar: {
    backgroundColor: '#003C72',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  toolbarContent: {
    display: 'flex',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  imageIcon: {
    width: 40,
    height: 40,
    marginRight: 20,
    marginLeft: 5,
  },
  listItemTextStyle: {
    fontSize: 16,
    fontWeight: 600,
  },
  listcenter: {
    alignItems: "center"
  }
}));

export default function MainDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const isdoctor = useSelector((state) => state.states.isdoctor)

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Drawer variant="permanent" className={classes.drawer} classes={{ paper: classes.drawerClose }}>
          <Grid item className={classes.toolbar}>
            <img src={iseeLogo}
              alt="ISEE Logo"
              style={{ width: '100px' }}
              onClick={handleDrawer}
            />
          </Grid>
          <Divider />
          <Grid container xs={12} className={classes.listcenter}>
            {isdoctor ? <DoctorActions /> : <UserActions />}
          </Grid>
        </Drawer>
      </Grid>
    </div>
  );
}

const UserActions = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <List>
      <ListItem button key="dashboard" onClick={() => history.push("/")}>
        <ListItemIcon>
          <img src={dashboard} alt='HOME' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>DASHBOARD</Typography>} />
      </ListItem>
      <ListItem button key={1} onClick={() => history.push("/editprofile")}>
        <ListItemIcon>
          <img src={user} alt='User' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>USER PROFILE</Typography>} />
      </ListItem>
      <ListItem button key={2} onClick={() => history.push("/checkdisease")}>
        <ListItemIcon>
          <img src={classify} alt='Classify Disease' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>DISEASE DETECTION<br />SYSTEM</Typography>}
        />
      </ListItem>
      <ListItem button key={3} onClick={() => history.push("/reports")}>
        <ListItemIcon>
          <img src={report} alt='Reports' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>REPORTS</Typography>} />
      </ListItem>
      <ListItem button key={4} onClick={() => history.push("/bloodglocuse")}>
        <ListItemIcon>
          <img src={blood} alt='Blood Glocuse' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>MANAGE BLOOD<br />GLUCOSE</Typography>} />
      </ListItem>
      <ListItem button key={5} onClick={() => history.push("/bloodpressure")}>
        <ListItemIcon>
          <img src={heart} alt='Blood Pressure' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>MANAGE BLOOD<br />PRESSURE</Typography>} />
      </ListItem>
      <ListItem button key={6} onClick={() => history.push("/appointdoctor")}>
        <ListItemIcon>
          <img src={doctor} alt='Doctor' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>APPOINT DOCTORS</Typography>} />
      </ListItem>
      <ListItem button key={7} onClick={() => history.push("/messages")}>
        <ListItemIcon>
          <img src={chat} alt='chat' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>MESSAGES</Typography>} />
      </ListItem>
            <ListItem button key={8} onClick={() => {
              dispatch(logout());
              history.push('/')
            }}>
              <ListItemIcon>
                <img src={exit} alt='Logout' className={classes.imageIcon} />
              </ListItemIcon>
              <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>LOGOUT</Typography>} />
            </ListItem>
    </List>
  )
}

const DoctorActions = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <List>
      <ListItem button key="dashboard" onClick={() => history.push("/")}>
        <ListItemIcon>
          <img src={dashboard} alt='HOME' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>DASHBOARD</Typography>} />
      </ListItem>
      <ListItem button key={1} onClick={() => history.push("/editprofile")}>
        <ListItemIcon>
          <img src={user} alt='User' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>PROFILE</Typography>} />
      </ListItem>
      <ListItem button key={2} onClick={() => history.push("/checkdisease")}>
        <ListItemIcon>
          <img src={classify} alt='Classify Disease' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>DISEASE DETECTION<br />SYSTEM</Typography>}
        />
      </ListItem>
      <ListItem button key={3}>
        <ListItemIcon>
          <img src={appointment} alt='Appointments' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>APPOINTMENT</Typography>} />
      </ListItem>
      <ListItem button key={7}>
        <ListItemIcon>
          <img src={chat} alt='chat' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>MESSAGES</Typography>} />
      </ListItem>
      <ListItem button key={8} onClick={() => {
        dispatch(logout());
        history.push('/')
      }}>
        <ListItemIcon>
          <img src={exit} alt='Logout' className={classes.imageIcon} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1" className={classes.listItemTextStyle}>LOGOUT</Typography>} />
      </ListItem>
    </List>
  )
}

    // <main className={classes.content}>
    //   <div className={classes.toolbarContent} />
    //   {props.children}
    // </main>
