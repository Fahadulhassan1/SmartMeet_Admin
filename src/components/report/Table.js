import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
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

const Table = (props) => {
  const classes = useStyles();
  console.log("Hello");
  console.log(props.rows.name);
  console.log(props.columns);
  return (
    <div className={classes.root}>
      <MaterialTable
        columns={props.columns}
        data={props.rows}
        
        title={props.title}
        
        options={{
          paging: true,
          pageSizeOptions: [10, 20, 50, 100],
          pageSize: 10,
          paginationType: "stepped",
          exportButton: true,
          exportAllData: true,
          actionsColumnIndex: -1,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 == 0 ? { background: "#f5f5f5f5" } : null,
          //   headerStyle: { background: "#572B77" },
        }}
      />
    </div>
  );
};
export default Table;
