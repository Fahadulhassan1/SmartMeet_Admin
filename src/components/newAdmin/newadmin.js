import * as React from "react";
import {
  Paper,
  Box,
  Grid,
  Typography,
  withStyles,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

const StyledDataGrid = withStyles({
  root: {
    "& .MuiDataGrid-renderingZone": {
      maxHeight: "none !important",
    },
    "& .MuiDataGrid-cell": {
      lineHeight: "unset !important",
      maxHeight: "none !important",
      whiteSpace: "normal",
      display: "flex",
      //   justifyContent: "center",
      alignItems: "center",
    },
    "& .MuiDataGrid-row": {
      maxHeight: "none !important",
    },
  },
})(DataGrid);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "270px",
    marginRight: "25px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "30px",
    },
    titleStyles: {
      fontWeight: "bold",
      fontSize: "2rem",
    },
  },
}));

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
function GridTable(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">
        <Box fontWeight="fontWeightBold" fontSize={20} mb={1}>
          {props.title}
        </Box>
      </Typography>
      <Grid container autoHeight={true}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper component={Box} style={{ height: "auto" }}>
            <StyledDataGrid
              rows={props.rows}
              columns={props.columns}
              width="100%"
              autoHeight={true}
              components={{
                Toolbar: CustomToolbar,
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default GridTable;
