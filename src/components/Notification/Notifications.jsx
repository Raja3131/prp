import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import moment from "moment";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getNotification } from "../../actions/notificationActions";
import { userData } from "../../utils/config";

const tableStyle = {
  width: 300,
  fontSize: 14,
  borderBottom: "none",
  borderTop: "none",
};

const Notifications = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const rows = useSelector((state) => state.notification.notificationDetails);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // eslint-disable-next-line
  useEffect(() => {
    dispatch(getNotification(rowsPerPage, page + 1));
  }, [dispatch, page, rowsPerPage]);
  const isLoading = useSelector((state) => state.invoices.isLoading);

  if (!userData) {
    history.push("/");
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
      <Container style={{ marginTop: "75px" }}>
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "2%", backgroundColor: "#fff" }}
        >
          <Grid>
            <h1>Notification</h1>
          </Grid>
        </Grid>
        <Divider />
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell style={{ top: 57, width: "220px" }}>
                  Message
                </TableCell>
                <TableCell style={{ top: 57, width: "60px" }}>
                  Create Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rows && rows.resultData) || isLoading ? (
                isLoading ? (
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell
                      scope="row"
                      style={{ fontSize: 16 }}
                      colSpan={2}
                      align="center"
                    >
                      <CircularProgress
                        size={25}
                        thickness={4}
                        sx={{ mt: 3, ml: 1 }}
                      />
                    </TableCell>
                  </TableRow>
                ) : (
                  rows.resultData?.map((row) => (
                    <TableRow>
                      <TableCell
                        scope="row"
                        style={{ fontSize: 16, width: "220px" }}
                        width={300}
                      >
                        {row.message}
                      </TableCell>
                      <TableCell scope="row" style={{ width: "60px" }}>
                        {moment(row.createdAt).format("DD-MM-YYYY hh:mm a ")}
                      </TableCell>
                    </TableRow>
                  ))
                )
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={userData.user.role === "vendor" ? 14 : 16}
                    align="center"
                  >
                    No Data Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[2, 10, 25, 100]}
          component="div"
          count={rows.totalResults ? rows.totalResults : 0}
          rowsPerPage={rowsPerPage ? rowsPerPage : 0}
          page={page ? page : 0}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Container>
    </React.Fragment>
  );
};

export default Notifications;
