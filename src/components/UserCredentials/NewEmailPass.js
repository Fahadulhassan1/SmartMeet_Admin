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

//reset password page
function NewEmailPass(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
 const { token } = useParams();
    const handleSubmit = async (e) => {
        setIsLoading(true);
       
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await axios.put(
          "https://pure-woodland-42301.herokuapp.com/api/admin/addnewPassword/" +
            token,
          {
            password,
          }
        );
        if (response.data.success) {
            setSuccess(response.data.message);
            setIsLoading(false);
            window.location.href = "/";
            setTimeout(() => {
              
            dispatch(login({ email, password }));
            }, 2000);
            
            
        } else {
            setIsLoading(false);
            alert(response.data.message);
            setError(response.data.message);
            
            dispatch(login({ email, password }))
                window.location.href = "/";
        
        }
      } catch (err) {
        console.log(err);
      }
    } else {
        setIsLoading(false);
      setError("Password and Confirm Password must match");
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5",
      },
    },
    typography: {
      fontFamily: "Roboto",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Reset Password"}
             
            </Button>
          </form>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              {error}
              {success}
            </Typography>
          </Box>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default NewEmailPass;


