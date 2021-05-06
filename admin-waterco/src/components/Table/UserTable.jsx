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

const UserTable = (props) => {
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
                        { user_id, first_name, last_name, email_address, user_city , user_country },
                        index
                      ) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {user_id}
                          </StyledTableCell>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {first_name}
                          </StyledTableCell>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {last_name}
                          </StyledTableCell>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {email_address}
                          </StyledTableCell>
                          <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {user_city}
                        </StyledTableCell>
                        <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {user_country}
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

export default UserTable;
