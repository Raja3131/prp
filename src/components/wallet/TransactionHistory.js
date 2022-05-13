import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import Divider from "@material-ui/core/Divider";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TextField,
  TableRow,
  Chip,
} from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getTransactionHistoryList } from "../../actions/walletActions";
import { userData } from "../../utils/config";
import { Autocomplete } from "@material-ui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const TransactionHistory = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const rows = useSelector((state) => state?.walletPayment.transaction);
  const isLoading = useSelector((state) => state?.walletPayment.isLoading);
  // eslint-disable-next-line

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [year, setYear] = useState(moment(new Date()).format("YYYY"));
  const [month, setMonth] = useState(moment().format("MM"));
  const [transactionType, setTransactionType] = useState();

  useEffect(() => {
    let searchQuery = {
      month: month,
      year: year,
      limit: rowsPerPage,
      offset: page + 1,
    };

    if (transactionType) searchQuery.transactionType = transactionType;

    dispatch(getTransactionHistoryList(searchQuery));
    // eslint-disable-next-line
  }, [month, year, rowsPerPage, transactionType, page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!userData) {
    history.push("/");
  }

  const transactionTypeProps = [
    { title: "Sent", id: "sent", onlyVendor: false },
    { title: "Received", id: "received", onlyVendor: true },
    { title: "Refund", id: "refund", onlyVendor: true },
    { title: "Withdraw", id: "withdraw", onlyVendor: true },
    { title: "Added", id: "added", onlyVendor: false },
  ];

  const MonthProps = [
    { title: "January", id: "01" },
    { title: "February", id: "02" },
    { title: "March", id: "03" },
    { title: "April", id: "04" },
    { title: "May", id: "05" },
    { title: "June", id: "06" },
    { title: "July", id: "07" },
    { title: "August", id: "08" },
    { title: "September", id: "09" },
    { title: "October", id: "10" },
    { title: "November", id: "11" },
    { title: "December", id: "12" },
  ];

  const defaultProps = {
    options:
      userData.user.role === "vendor"
        ? transactionTypeProps.filter((val) => val.onlyVendor)
        : transactionTypeProps.filter((val) => !val.onlyVendor),
    getOptionLabel: (option) => option.title,
  };

  const defaultProps2 = {
    options: MonthProps,
    getOptionLabel: (option) => option.title,
  };

  return (
    <React.Fragment>
      <Container style={{ marginTop: "75px" }}>
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "2%", backgroundColor: "#fff" }}
        >
          <Grid />
          <Grid>
            <h1>Transaction History</h1>
          </Grid>
          <Grid />
        </Grid>
        <Divider />
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "2%", backgroundColor: "#fff" }}
        >
          <Grid>
            <Autocomplete
              style={{ width: "200px" }}
              label="Select Month"
              {...defaultProps2}
              defaultValue={MonthProps.find(
                (v) => v.id === moment().format("MM")
              )}
              disableClearable
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select Month"
                  variant="outlined"
                />
              )}
              onChange={(event, value) => {
                if (value !== null) setMonth(value?.id);
              }}
            />
          </Grid>
          <Grid>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={["year"]}
                label=" Select Year"
                disableClearable
                value={year}
                onChange={(newValue) => {
                  if (newValue) {
                    setYear(moment(newValue).format("YYYY"));
                    return;
                  }
                  setYear(moment(new Date()).format("YYYY"));
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid>
            <Autocomplete
              style={{ width: "200px" }}
              label="Select Transaction type"
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select Transaction type"
                  variant="outlined"
                />
              )}
              {...defaultProps}
              onChange={(event, value) => {
                setTransactionType(value?.id ? value?.id : null);
              }}
            />
          </Grid>
        </Grid>
        <Divider />
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{ top: 57, minWidth: "180px" }}
                  align="center"
                >
                  Date
                </TableCell>
                <TableCell
                  style={{ top: 57, minWidth: "120px" }}
                  align="center"
                >
                  Transaction Type
                </TableCell>
                <TableCell style={{ top: 57, minWidth: "120px" }} align="right">
                  Total Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rows && rows?.resultData.length > 0) || isLoading ? (
                isLoading ? (
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell
                      scope="row"
                      width={300}
                      style={{ fontSize: 16 }}
                      colSpan={3}
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
                        align="center"
                        scope="row"
                        style={{ fontSize: 16 }}
                        width={300}
                      >
                        {moment(row.date).format("DD-MM-YYYY")}
                      </TableCell>
                      <TableCell scope="row" width={300} align="center">
                        <Chip
                          label={<b>{row.transactionType.toUpperCase()}</b>}
                          color="primary"
                          style={{
                            backgroundColor:
                              row.transactionType === "added" ||
                              row.transactionType === "refund" ||
                              row.transactionType === "received"
                                ? "green"
                                : "#db3236",
                          }}
                        />
                      </TableCell>
                      <TableCell
                        scope="row"
                        width={300}
                        align="right"
                        style={{
                          color:
                            row.transactionType === "added" ||
                            row.transactionType === "refund" ||
                            row.transactionType === "received"
                              ? "green"
                              : "#db3236",
                        }}
                      >
                        <b>${Number(row.amount).toFixed(2)}</b>
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
          count={rows?.totalResults ? rows?.totalResults : 0}
          rowsPerPage={rowsPerPage ? rowsPerPage : 0}
          page={page ? page : 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </React.Fragment>
  );
};

export default TransactionHistory;
