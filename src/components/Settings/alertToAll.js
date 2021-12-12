import * as React from "react";
import { useState } from "react";


import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
const axios = require("axios");




//fumction of one button pressed
// function handleClick(event) {

//     //get api using axios 
//   axios
//     .get("https://pure-woodland-42301.herokuapp.com/api/admin/alertToAll")

//     .then(function (response) {
//      alert("Alert to all people in building to leave the building immediately.");
//     });
// }
    
//function of button
function AlertToAll() {
  const [success, setSuccess] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  function handleClick(event) {
    // event.preventDefault();
    setIsLoading(true);
    
    
    //get api using axios
    axios
      .get("https://pure-woodland-42301.herokuapp.com/api/admin/alertToAll")

      .then(function (response) {
        
        alert(
        "Alert to all people in building to leave the building immediately."  
        );
        setIsLoading(false);
      });
    
  }
    return (
      <Grid container>
        <Grid item xs={12}>
          <Card
            style={{
              padding: 61,
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} style={{ marginTop: 10, marginBottom: 100 }}>
              <Typography variant="h5" component="h2">
                Warn all people in building to leave the building immediately.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                alignItem: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Button
                variant="contained"
                color="error"
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? "Sending Alert" : "Alert To All"}
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    );
}
export default AlertToAll;