import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
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
  Button,
} from "@material-ui/core";
import {
  customLineItem,
  deleteCustomLineItem,
} from "../../actions/invoiceActions";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import { userData } from "../../utils/config";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { useSnackbar } from "react-simple-snackbar";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";

import "sweetalert2/dist/sweetalert2.min.css";

const CustomLineItem = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const rows = useSelector((state) => state?.invoices?.customLineItem);
  const isLoading = useSelector((state) => state?.invoices?.isLoading);
  const [openSnackbar] = useSnackbar();

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
    dispatch(customLineItem(rowsPerPage, page + 1));
    // eslint-disable-next-line
  }, [dispatch, rowsPerPage, page, location]);

  const deleteInvoices = (id, openSnackbar) => {
    dispatch(deleteCustomLineItem(id, openSnackbar));
  };

  return (
    <>
      <Container style={{ marginTop: "75px" }}>
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "2%", backgroundColor: "#fff" }}
        >
          <Grid>
            <h1>Custom Line Item</h1>
          </Grid>{" "}
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push("/add-custom-lineitem");
              }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <Divider />
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell style={{ top: 57, minWidth: "220px" }}>
                  Name
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Custom Name
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "180px" }}>
                  Vendor Email
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }}>
                  Vendor Name
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "40px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                  <TableCell
                    scope="row"
                    width={300}
                    style={{ fontSize: 16 }}
                    colSpan={5}
                    align="center"
                  >
                    <CircularProgress
                      size={25}
                      thickness={4}
                      sx={{ mt: 3, ml: 1 }}
                    />
                  </TableCell>
                </TableRow>
              ) : rows?.resultData.length > 0 ? (
                rows?.resultData?.map((row) => (
                  <TableRow key={row?._id}>
                    <TableCell scope="row" style={{ fontSize: 16 }}>
                      {row?.lineItemId.name}
                    </TableCell>
                    <TableCell scope="row">{row?.name}</TableCell>
                    <TableCell scope="row">{row?.vendorUserId.email}</TableCell>
                    <TableCell scope="row">
                      {row?.vendorUserId?.externalData?.firstName +
                        " " +
                        row?.vendorUserId?.externalData?.lastName}
                    </TableCell>
                    <TableCell scope="row">
                      <>
                        <IconButton
                          title="Edit Invoice"
                          onClick={() =>
                            history.push({
                              pathname: `/edit-custom-lineitem/${row?._id}`,
                              state: row,
                            })
                          }
                          style={{ color: "#80000094", cursor: "pointer" }}
                        >
                          <EditIcon style={{ width: "20px", height: "20px" }} />
                        </IconButton>
                        <IconButton
                          title="Delete Invoice"
                          onClick={() => deleteInvoices(row?._id, openSnackbar)}
                          style={{ color: "red", cursor: "pointer" }}
                        >
                          <DeleteOutlineRoundedIcon style={{ width: "20px" }} />
                        </IconButton>
                      </>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
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
          count={rows?.totalResults ? rows?.totalResults : 0}
          rowsPerPage={rowsPerPage ? rowsPerPage : 0}
          page={page ? page : 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </>
  );
};

export default CustomLineItem;
