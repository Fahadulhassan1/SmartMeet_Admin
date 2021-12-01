//change password within app with email, old password and new password

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

export default function ChangePassword() {
  //change password within app with email, old password and new password
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [currentPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      console.log("email: " + email);
      console.log("oldPassword: " + currentPassword);
      console.log("newPassword: " + newPassword);
      console.log("confirmPassword: " + confirmPassword);
      console.log(success);

      const response = await axios.put(
        "http://localhost:3001/api/admin/changePassword",
        {
          email,
          currentPassword,
          newPassword,
        }
      );

      if (response.data.success) {
        setSuccess(response.data.message);
        setIsLoading(false);

        alert(response.data.message);
      } else {
        setError(response.data.message);
        alert(response.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error.message);
      alert("incorrect email or password");
      setIsLoading(false);
    }
  };

  return (
    <Grid container>
      <Container
        component="main"
        maxWidth="xs"
        style={{ border: "1px solid grey", padding: "20px" , marginTop: "20px"}}
      >
        <CssBaseline />
        <div className="paper">
          <Grid item xs={12}>
            <Avatar
              className="avatar"
              sx={{
                mx: "auto",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginBottom: 15 }}
              sx={{
                mx: "auto",

                

                textAlign: "center",
              }}
            >
              change password
            </Typography>
          </Grid>
          <form className="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="oldPassword"
                  label="Old Password"
                  type="password"
                  id="oldPassword"
                  autoComplete="current-password"
                  onChange={(event) => setOldPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="newPassword"
                  label="New Password"
                  type="password"
                  id="newPassword"
                  autoComplete="current-password"
                  onChange={(event) => setNewPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} style={{ marginBottom: "50px" }}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Send"}
            </Button>
          </form>
          {/* <Grid item style={{ margin : "auto" }}>
                        
                        {success ? <p>"Password Chnaged sucessfully"</p> : null}
                  </Grid>   */}
        </div>
      </Container>
    </Grid>
  );
}
