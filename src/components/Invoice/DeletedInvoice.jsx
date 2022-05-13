import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";
import {
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { listDeletedInvoice } from "../../actions/invoiceActions";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import { userData } from "../../utils/config";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";

import { capitalize } from "../../utils/utils";

const Invoices = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const rows = useSelector((state) => state.invoices.invoice);
  const isLoading = useSelector((state) => state.invoices.isLoading);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  useEffect(() => {
    dispatch(listDeletedInvoice(rowsPerPage, page + 1));
    // eslint-disable-next-line
  }, [location, page, rowsPerPage]);

  return (
    <>
      <Container style={{ marginTop: "75px" }}>
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "2%", backgroundColor: "#fff" }}
        >
          <Grid>
            <h1>Deleted Invoices</h1>
          </Grid>
        </Grid>
        <Divider />
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell style={{ top: 57, minWidth: "180px" }}>
                  Invoice Number
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Client Name
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Date
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Due Date
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Tax Amount
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Tax Percentage
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Total Amount
                </TableCell>
                {userData.user.role === "vendor" && (
                  <>
                    <TableCell style={{ top: 57, minWidth: "120px" }}>
                      Contact
                    </TableCell>
                    <TableCell style={{ top: 57, minWidth: "120px" }}>
                      vendor
                    </TableCell>
                  </>
                )}
                <TableCell style={{ top: 57, minWidth: "320px" }}>
                  DC ids
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Manager Status
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Admin Status
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Accountant Status
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Managing Admin Status
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Status
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rows && rows.resultData) || isLoading ? (
                isLoading ? (
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell
                      scope="row"
                      width={300}
                      style={{ fontSize: 16 }}
                      colSpan={userData.user.role === "vendor" ? 14 : 16}
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
                    <TableRow key={row.invoiceNumber}>
                      <TableCell
                        scope="row"
                        style={{ fontSize: 16 }}
                        width={300}
                      >
                        {row.invoiceNumber}
                      </TableCell>
                      <TableCell scope="row" width={300}>
                        PRP
                      </TableCell>
                      <TableCell scope="row" width={300}>
                        {moment(row.date).format("DD-MM-YYYY")}
                      </TableCell>
                      <TableCell scope="row" width={300}>
                        {moment(row.dueDate).format("DD-MM-YYYY")}
                      </TableCell>
                      <TableCell scope="row" width={300} align="right">
                        ${Number(row.taxAmount).toFixed(2)}
                      </TableCell>
                      <TableCell scope="row" width={300} align="center">
                        {row.taxPercentage}
                      </TableCell>
                      <TableCell scope="row" width={300} align="right">
                        ${Number(row.totalAmount).toFixed(2)}
                      </TableCell>
                      {userData.user.role === "vendor" && (
                        <>
                          <TableCell scope="row" width={300}>
                            <span title={row?.vendorId?.email}>
                              {row?.vendorId?.email}
                            </span>
                          </TableCell>
                          <TableCell scope="row" width={300}>
                            {row?.vendorId?.externalData?.vendor?.name}
                          </TableCell>
                        </>
                      )}
                      <TableCell scope="row" width={300}>
                        <span title={row.distributionCenter.dcId}>
                          {row.distributionCenter.dcId}
                        </span>
                      </TableCell>
                      <TableCell scope="row" width={300}>
                        {capitalize(row.managerStatus)}
                      </TableCell>
                      <TableCell scope="row" width={300}>
                        {capitalize(row.adminStatus)}
                      </TableCell>
                      <TableCell scope="row" width={300}>
                        {capitalize(row.accountantStatus)}
                      </TableCell>
                      <TableCell scope="row" width={300}>
                        {capitalize(row.superAdminStatus)}
                      </TableCell>
                      <TableCell scope="row" width={300}>
                        <Badge
                          overlap="rectangular"
                          style={checkStatus(row.status)}
                        >
                          {capitalize(row.status)}
                        </Badge>
                      </TableCell>
                      <TableCell scope="row" width={300}>
                        <>
                          <IconButton
                            title="View Invoice"
                            onClick={() =>
                              history.push(`/view/invoice/${row.id}`)
                            }
                            style={{ color: "#6279edc2", cursor: "pointer" }}
                          >
                            <VisibilityIcon
                              style={{ width: "20px", height: "20px" }}
                            />
                          </IconButton>
                        </>
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
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </>
  );
};

export default Invoices;

function checkStatus(status) {
  return status === "partial"
    ? {
        border: "solid 0px #1976d2",
        backgroundColor: "#baddff",
        padding: "8px 18px",
        borderRadius: "20px",
      }
    : status === "paid"
    ? {
        border: "solid 0px green",
        backgroundColor: "#a5ffcd",
        padding: "8px 18px",
        borderRadius: "20px",
      }
    : status === "unpaid"
    ? {
        border: "solid 0px red",
        backgroundColor: "#f5ff91",
        padding: "8px 18px",
        borderRadius: "20px",
      }
    : status === "approved"
    ? {
        border: "solid 0px red",
        backgroundColor: "#91faff",
        padding: "8px 18px",
        borderRadius: "20px",
      }
    : status === "rejected"
    ? {
        border: "solid 0px red",
        backgroundColor: "#ffaa91",
        padding: "8px 18px",
        borderRadius: "20px",
      }
    : status === "draft"
    ? {
        border: "solid 0px green",
        backgroundColor: "#ff7d7d",
        padding: "8px 18px",
        borderRadius: "20px",
      }
    : status === "deleted"
    ? {
        border: "solid 0px red",
        backgroundColor: "#ffaa91",
        padding: "8px 18px",
        borderRadius: "20px",
      }
    : status === "changeRequest"
    ? {
        border: "solid 0px red",
        backgroundColor: "#ffaa91",
        padding: "8px 18px",
        borderRadius: "20px",
      }
    : "red";
}
