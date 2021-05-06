import React, { useState } from "react";
import {
  withStyles,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TablePagination,
} from "@material-ui/core";
import useStyles from "./Table.styles";
import "./Table.scss";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#d6dde8",
    fontSize: 20,
    color: "rgba(102, 102, 102, 1)",
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    fontWeight: "bold",
    textDecoration: "none",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    width: "100%",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const BillTable = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const count = props.count;
  const details = props.data;
  const rowsPerPage = 10;


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
        <div className={classes.root}>
          <TableContainer component={Paper} elevation={4}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow component="tr">
                {props.fields.map((field, idx) => {
                    console.log(field)
                    return (
                    <StyledTableCell key={idx} align="center">{field}</StyledTableCell>
                )})}
                </TableRow>
              </TableHead>
              <TableBody>
                {details.length > 0 && (
                  details
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(
                      (
                        { bill_id, balance, bill_client_id, bill_staff_id },
                        index
                      ) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {bill_id}
                          </StyledTableCell>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {balance}
                          </StyledTableCell>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {bill_client_id}
                          </StyledTableCell>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {bill_staff_id}
                          </StyledTableCell>
                        </StyledTableRow>
                      )
                    )
                )}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[10]}
              component="div"
              count={count}
              rowsPerPage={10}
              page={page}
              onChangePage={handleChangePage}
              size="large"
              className={classes.ul}
            />
          </TableContainer>
        </div>
  );
};

export default BillTable;
