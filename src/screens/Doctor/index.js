import React from "react";
import "./style.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Dr. Arving Gupta (Jaipur)", "141-40078888"),
  createData("Dr. Rajeev Patni(jaipur)", "+91-9869502390"),
  createData("Dr. Rakesh Parikh (jaipur)", "+91-9413639983"),
  createData("DR. GHAN SHYAM DAS (kota)", "07442423815"),
];

const Doctor = () => {
  return (
    <>
      <span className="contactDoc">
        Contact information of diabetes doctors
      </span>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Doctor;
