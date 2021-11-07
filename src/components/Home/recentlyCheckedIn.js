import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 80 },
  { id: "department", label: "Department", minWidth: 80 },
  {
    id: "time",
    label: "Time",
    minWidth: 85,

    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, department, time) {
  return { name, department, time };
}

const rows = [
  createData("Fahad", "Finance", "11:30- 12-30"),
  createData("Fahad", "Finance", "11:30- 12-30"),
  createData("Fahad", "Finance", "11:30- 12-30"),
  createData("Fahad", "Finance", "11:30- 12-30"),
  createData("Fahad", "Finance", "11:30- 12-30"),
  createData("Fahad", "Finance", "11:30- 12-30"),
  createData("Fahad", "Finance", "11:30- 12-30"),
  createData("Fahad", "Finance", "11:30- 12-30"),
  createData("Fahad", "Finance", "11:30- 12-30"),
  createData("Fahad", "Finance", "11:30- 12-30"),
  createData("Fahad", "Finance", "11:30-12:30"),
];

export default function ColumnGroupingTable(props) {
  const { typeOfCheck, setdata, recentCheckedIn } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

 

  var row = [];
  if (recentCheckedIn == null || recentCheckedIn == undefined) {
    row = rows;
  } else {
    recentCheckedIn.map((element) => {
      row.push(
        createData(
          element.VisitorId.firstName,
          element.VisitorId.email,
          element.VisitorId.firstName
        )
      );
    });
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
                {typeOfCheck}
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
// {
//   data ? (
//     data.map((item) => {
//       console.log(item.Timeslot);
//       return (
//         <div>
//           <TableCell
//             key={item.Timeslot}
//             align={item.align}
//             style={{ top: 57, minWidth: 80 }}
//           >
//             {item.Timeslot}
//           </TableCell>
//           ;
//         </div>
//       );
//     })
//   ) : (
//     <div></div>
//   );
// }
