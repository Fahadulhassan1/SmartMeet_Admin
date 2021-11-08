import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { login } from "../../pages/statesSlice";
import axios from "axios";
import { useParams } from "react-router";
const io = require("io");
//chat app component
export default function Chat() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState({});
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);
  const [isTypingUsers, setIsTypingUsers] = React.useState([]);
  const [isTypingUsersCount, setIsTypingUsersCount] = React.useState(0);
  const [isTypingUsersString, setIsTypingUsersString] = React.useState("");

  //initialize socket connection
  const socket = io.connect("http://localhost:3000");

  //initialize mui theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#FFFFFF",
      },
      background: {
        default: "#FFFFFF",
      },
    },
  });

  //initialize socket listener
  React.useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("user", (user) => {
      setUsers((users) => [...users, user]);
    });

    socket.on("typing", (user) => {
      setIsTypingUsers((users) => [...users, user]);
    });

    socket.on("stopTyping", (user) => {
      setIsTypingUsers((users) => users.filter((u) => u.id !== user.id));
    });

    socket.on("typingUsers", (users) => {
      setIsTypingUsers((users) => users.filter((u) => u.id !== user.id));
      setIsTypingUsersCount(users.length);
      setIsTypingUsersString(
        users.map((u) => u.username).join(", ") || "No one is typing"
      );
    });
  }, []);

  //initialize component

  React.useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/users/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  //send message
  const sendMessage = () => {
    if (message) {
      socket.emit("message", {
        message,
        user: user.username,
      });
      setMessage("");
    }
  };

  //send typing
  const sendTyping = () => {
    if (message) {
      socket.emit("typing", {
        user: user.username,
      });
    }
  };

  //stop typing
  const stopTyping = () => {
    socket.emit("stopTyping", {
      user: user.username,
    });
  };

  //login
  const loginUser = () => {
    setIsDisabled(true);
    setIsLoading(true);
    axios
      .post("https://pure-woodland-42301.herokuapp.com/api/admin/signIn", {
        username,
        password,
      })
      .then((res) => {
        setIsLoggedIn(true);
        setIsLoading(false);
        setIsDisabled(false);
        dispatch(login(res.data));
      })
      .catch((err) => {
        setIsLoading(false);
        setIsDisabled(false);
        setError(true);
        setErrorMessage(err.response.data.message);
      });
  };

  //render
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {user.username}
          </Typography>
          <form className="form">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              onClick={loginUser}
              disabled={isDisabled}
            >
              {isLoading ? "Loading..." : "Login"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          
        </Box>
      </Container>
    </ThemeProvider>
  );
}



