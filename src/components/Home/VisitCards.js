import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function BoxSx(props) {
  const { icon, checkedIn_Visitors, numberOfVisitors  , color} = props;
 
  return (
    <>
      <Card sx={{ maxWidth: "auto", height: "100%", bgcolor: color, m: 2 ,borderRadius: 3}}>
        <CardActionArea>
          <CardMedia
          // component="img"
          // height="20"
          // image= {icon}
          // alt="green iguana"
          />

          <div>{icon}</div>

          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              style={{ color: "white" }}
            >
              {checkedIn_Visitors}
            </Typography>
            <Typography variant="h4" style={{ color: "white" }}>
              {numberOfVisitors}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* <Grid container sx = {{ display : 'flex'}}>
    <Grid xs = {12} md = {3}  >
    <Box
      sx={{
        width: 200,
        height: 200,
        
        bgcolor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    </Grid>
    <Grid xs = {12} md = {2} >
    <Box
      sx={{
        width: 200,
        height: 200,
        
        bgcolor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    </Grid>
    <Grid xs = {12} md = {2} >
    <Box
      sx={{
        width: 200,
        height: 200,
        
        bgcolor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    </Grid>
    <Grid xs = {12} md = {2} >
    <Box
      sx={{
        width: 200,
        height: 200,
        
        
        bgcolor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    </Grid>
    </Grid>
    
    */}
    </>
  );
}
