import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "react-simple-snackbar";
import { useHistory } from "react-router-dom";
import {
  updateWithdraw,
  withdraw,
  withdrawWithStatus,
} from "../../actions/withdrawActions";
import Typography from "@mui/material/Typography";
import { Autocomplete } from "@material-ui/lab";
import Modal from "@mui/material/Modal";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 960,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EnhancedTable() {
  const [selected, setSelected] = useState([]);
  const [filter, setFilter] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [withdrawList, setWithdrawLists] = useState([]);
  const [status, setStatus] = useState([]);

  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({});

  const handleOpen = (val) => {
    setOpen(true);
    setModalValue(val);
  };
  const handleClose = () => {
    setOpen(false);
    setModalValue({});
  };

  const [openSnackbar] = useSnackbar();
  const history = useHistory();
  const dispatch = useDispatch();

  const rows = useSelector((state) => state?.withdraw?.withdraws);
  const isLoading = useSelector((state) => state?.invoices.isLoading);
  const isWithdrawUpdateLoading = useSelector(
    (state) => state?.withdraw?.isWithdrawUpdateLoading
  );

  useEffect(() => {
    if (filter) {
      dispatch(withdrawWithStatus(filter, rowsPerPage, page + 1));
    } else {
      dispatch(withdraw(rowsPerPage, page + 1));
    }
  }, [page, rowsPerPage, dispatch, filter]);

  const userTypes = [
    { title: "Cancelled", id: "cancelled" },
    { title: "Processing", id: "processing" },
    { title: "Paid", id: "paid" },
  ];

  const defaultProps = {
    options: userTypes,
    getOptionLabel: (option) => option.title,
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  useEffect(() => {
    const withdrawLists = selected.map((value) => {
      return { _id: value };
    });
    setWithdrawLists(withdrawLists);
  }, [selected]);

  const filterSearch = (event, val) => {
    setFilter(val ? val.id : null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Container>
      <Grid
        container
        justifyContent="space-between"
        style={{ padding: "2%", backgroundColor: "#fff" }}
      >
        <Grid />
        <Grid>
          <h1>Withdraw List</h1>
        </Grid>
        <Grid />
      </Grid>
      <Divider />
      <Grid container style={{ padding: "2%", backgroundColor: "#fff" }}>
        <Grid md={2}>
          <Autocomplete
            style={{ width: "200px" }}
            label="select DC-Id"
            renderInput={(params) => (
              <TextField {...params} label="Filter status" variant="outlined" />
            )}
            {...defaultProps}
            onChange={filterSearch}
          />
        </Grid>
        <Grid md={7} />
        {selected.length > 0 && (
          <>
            <Grid>
              <Autocomplete
                style={{ width: "200px" }}
                label="select DC-Id"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select status"
                    variant="outlined"
                  />
                )}
                {...defaultProps}
                onChange={(event, value) => {
                  setStatus(value?.id);
                }}
              />
            </Grid>
            <Button
              disabled={isWithdrawUpdateLoading}
              onClick={() => {
                if (selected.length > 0) {
                  dispatch(
                    updateWithdraw(
                      { withdrawList, status: status },
                      openSnackbar,
                      history,
                      withdraw(rowsPerPage, page + 1),
                      setSelected
                    )
                  );
                } else {
                  openSnackbar("Please Check Minimum one Box");
                }
              }}
            >
              {isWithdrawUpdateLoading ? (
                <CircularProgress
                  color="info"
                  size={25}
                  thickness={4}
                  sx={{ mt: 3, ml: 1 }}
                />
              ) : (
                "Update"
              )}
            </Button>
          </>
        )}
      </Grid>

      <Divider />
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell>Transfer ID</TableCell>
                  <TableCell>Vendor Name</TableCell>
                  <TableCell>Vendor Email</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center" width={60}>
                    Status
                  </TableCell>
                  <TableCell align="center" width={50}>
                    View
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rows && rows?.resultData.length > 0) || isLoading ? (
                  isLoading ? (
                    <TableRow>
                      <TableCell
                        scope="row"
                        width={300}
                        style={{ fontSize: 16 }}
                        colSpan={8}
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
                    rows?.resultData?.map((row, index) => {
                      const isItemSelected = isSelected(row?._id);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row?.name}
                          selected={isItemSelected}
                        >
                          <TableCell
                            onClick={(event) => {
                              if (selected.length < 10) {
                                row?.status === "paid" ||
                                row?.status === "cancelled"
                                  ? event.preventDefault()
                                  : handleClick(event, row?._id);
                              } else {
                                openSnackbar("Only 10 box can be checked");
                              }
                            }}
                          >
                            <Checkbox
                              disabled={
                                row?.status === "paid" ||
                                row?.status === "cancelled"
                              }
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                "aria-labelledby": labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell id={labelId} scope="row">
                            {" "}
                            {row?.transferId}{" "}
                          </TableCell>
                          <TableCell>
                            {row?.vendorInfo?.firstName}{" "}
                            {row?.vendorInfo?.lastName}
                          </TableCell>
                          <TableCell>{row?.vendorInfo?.email}</TableCell>
                          <TableCell align="right" style={{ color: "green" }}>
                            <b>${row?.amount.toFixed(2)}</b>
                          </TableCell>
                          <TableCell align="center">
                            {moment(row?.date).format("MM-DD-YYYY")}
                          </TableCell>
                          <TableCell align="center">
                            <Chip
                              label={<b>{row.status.toUpperCase()}</b>}
                              color="primary"
                              style={{
                                backgroundColor:
                                  row.status === "paid"
                                    ? "#8bc34a"
                                    : row.status === "processing"
                                    ? "#4885ed"
                                    : "#db3236",
                              }}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              title="View Invoice"
                              onClick={() => handleOpen(row)}
                              style={{ color: "#6279edc2", cursor: "pointer" }}
                            >
                              <VisibilityIcon
                                style={{ width: "20px", height: "20px" }}
                              />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} align="center">
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
            count={rows && rows.totalResults ? rows.totalResults : 0}
            rowsPerPage={rowsPerPage ? rowsPerPage : 0}
            page={page ? page : 0}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h5" component="h2">
                Transfer Id : {modalValue?.transferId}
              </Typography>
              <Typography variant="h5" component="h2">
                Account Type : {!("paypal" in modalValue) ? "ACH" : "PAYPAL"}
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{ marginTop: "25px" }}
              >
                {!("paypal" in modalValue) ? (
                  <>
                    <TableContainer component={Paper}>
                      <Table
                        sx={{ minWidth: 650 }}
                        size="small"
                        aria-label="a dense table"
                      >
                        <TableBody>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              Bank name
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.bank?.name}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              City
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.bank?.city}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              State
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.bank?.state}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              Zip
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.bank?.zip}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                        <TableBody>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              Account Number
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.account?.accountNumber}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              Routing Number
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.account?.routingNumber}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              State
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.account?.accountType}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                        <TableBody>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              First name
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.personal?.firstName}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              Last name
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.personal?.lastName}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              Email
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.personal?.email}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              Mobile
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {modalValue?.ach?.personal?.mobile}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </>
                ) : (
                  <TableContainer component={Paper}>
                    <Table
                      sx={{ minWidth: 650 }}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell width="50%" component="th" scope="row">
                            PayPal Email
                          </TableCell>
                          <TableCell width="50%" component="th" scope="row">
                            {modalValue?.paypal?.email}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Typography>
            </Box>
          </Modal>
        </Paper>
      </Box>
    </Container>
  );
}
