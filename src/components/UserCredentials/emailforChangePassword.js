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

//email screen for forgetPassword
export default function EmailForChangePassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .post(
        "https://pure-woodland-42301.herokuapp.com/api/admin/forgetPassword",
        {
          email: email,
        }
      )
      .then((res) => {
        if (res.data.message == "email has been sent to your given email") {
          alert("Email sent successfully");
          //redirect to the new page
          setIsLoading(false);
          window.location.href = "/";
          dispatch(login(res.data));
        } else {
          alert(res.data.message);
          
          setIsLoading(false);
          window.location.reload();
          dispatch(login(res.data));
        }
        
        
      })
      .catch((err) => {
        alert(err.data.error);
        setIsLoading(false);
        setError(err.response.data.message);
         console.label(err.data.error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        {error && (
          <Typography component="p" variant="p">
            {error}
          </Typography>
        )}
        <form className="form">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChangeEmail}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={handleSubmit}
            disabled={isLoading}
                  >
                      {isLoading ? "Loading..." : "Send"}
                  </Button>
           
              </form>
          </div>
        </Container>
    );
}