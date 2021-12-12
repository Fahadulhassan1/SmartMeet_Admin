import { useState } from "react";
import * as React from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
    TextField,
  Grid
} from "@mui/material";

export const SettingsPassword = (props) => {
 const [email, setEmail] = React.useState("");
 const [currentPassword, setOldPassword] = React.useState("");
 const [newPassword, setNewPassword] = React.useState("");
 
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
     ;
     console.log(success);

     const response = await axios.put(
       "https://pure-woodland-42301.herokuapp.com/api/admin/changePassword",
       {
         email,
         currentPassword,
         newPassword,
       }
     );

     if (response.data.success) {
       setSuccess(response.data.message);
         setIsLoading(false);
        document.forms["form"].reset();

       alert(response.data.message);
     } else {
       setError(response.data.message);
       alert(response.data.message);
         setIsLoading(false);
          document.forms["form"].reset();
     }
   } catch (error) {
     setError(error.message);
     alert("incorrect email or password");
     setIsLoading(false);
     document.forms["form"].reset();
   }
 };


    return (
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={5} style={{ marginTop: 10 }}>
          <form onSubmit={handleSubmit} name="form">
            <Card>
              <CardHeader subheader="Update password" title="Password" />
              <Divider />
              <CardContent>
                <TextField
                  fullWidth
                  required
                  label="Email Address"
                  margin="normal"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  required
                  onChange={(event) => setOldPassword(event.target.value)}
                  type="password"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Confirm password"
                  margin="normal"
                  name="confirm"
                  required
                  onChange={(event) => setNewPassword(event.target.value)}
                  type="password"
                  variant="outlined"
                />
              </CardContent>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 2,
                }}
              >
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  disabled={isLoading}
                >
                  {isLoading ? "Updating..." : "Update"}
                </Button>
              </Box>
            </Card>
          </form>
        </Grid>
      </Grid>
    );
};
export default SettingsPassword;