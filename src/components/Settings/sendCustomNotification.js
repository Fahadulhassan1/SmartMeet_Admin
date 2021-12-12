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
  Grid,
} from "@mui/material";

export const CustomNotification = (props) => {
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  

  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      console.log("email: " + title);
      console.log("oldPassword: " + message);
      
      console.log(success);

      const response = await axios.post(
        "https://pure-woodland-42301.herokuapp.com/api/admin/customNotification",
        {
          title: title,
          message: message,
        }
      );

      if (response.data.success) {
        setSuccess(response.data.message);
        setIsLoading(false);
        document.forms["form"].reset();

        alert("message sent to all users");
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
            <CardHeader subheader="Send Custom Notification" title="Notification" />
            <Divider />
            <CardContent>
              <TextField
                fullWidth
                required
                label="Title"
                margin="normal"
                name="title"
                autoComplete="email"
                onChange={(event) => setTitle(event.target.value)}
                type="title"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                name="Message"
                required
                onChange={(event) => setMessage(event.target.value)}
                type="Message"
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
                {isLoading ? "Sending..." : "Send Notification"}
              </Button>
            </Box>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
};
export default CustomNotification;
