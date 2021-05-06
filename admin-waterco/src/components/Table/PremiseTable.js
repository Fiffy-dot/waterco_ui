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

const PremiseTable = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const count = props.count;
  const details = props.data;
  const rowsPerPage = 10;


  console.log(details);

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
                        { id, premise_client_id, premise_sector_id, premise_route_id,
                        premise_zone_id, classfication, premise_status},
                        index
                      ) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {id}
                          </StyledTableCell>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {premise_client_id}
                          </StyledTableCell>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {premise_sector_id}
                          </StyledTableCell>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {premise_route_id}
                          </StyledTableCell>

                          <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {premise_zone_id}
                        </StyledTableCell>  
                        
                        <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {classfication}
                      </StyledTableCell>  
                      
                          <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {premise_status}
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

export default PremiseTable;
