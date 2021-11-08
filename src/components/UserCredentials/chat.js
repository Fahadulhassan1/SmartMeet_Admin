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

//chat screen
export default function Chat() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/message/${id}`)
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/message/${id}`, {
        message: message,
      })
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setMessage("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Chat
        </Typography>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="message"
            label="Message"
            name="message"
            autoComplete="message"
            autoFocus
            value={message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
                      className="submit"
                  >
                      Send
                  </Button>
      
              </form>
                <div className="chat">
                    {messages.map((message) => (
                    <div className="message">
                        <p>{message.message}</p>
                    </div>
                    ))}
              </div>
          </div>
        </Container>
    );
}
