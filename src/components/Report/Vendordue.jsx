import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllVendor,
  vendordueReport,
  vendordueReportFilter,
} from "../../actions/reportAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Autocomplete } from "@material-ui/lab";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={() => setOpen(!open)}
      >
        <TableCell width={50}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell scope="row" width={300} style={{ fontSize: 16 }}>
          {row?.vendor?.name.toUpperCase()}
        </TableCell>
        <TableCell align="right" width={100} style={{ color: "#1AA260" }}>
          <b>${row?.totalPaid.toFixed(2)}</b>
        </TableCell>
        <TableCell align="right" width={100} style={{ color: "#db3236" }}>
          <b>${row?.totalUnPaid.toFixed(2)}</b>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Vendor Contacts
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Vendor User Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align="right">Paid</TableCell>
                    <TableCell align="right">UnPaid</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailRow) => (
                    <TableRow key={detailRow.date}>
                      <TableCell scope="row">
                        {detailRow.vendorContact.firstName}{" "}
                        {detailRow.vendorContact.lastName}
                      </TableCell>
                      <TableCell scope="row">
                        {detailRow.vendorContact.email}
                      </TableCell>
                      <TableCell align="right" style={{ color: "#1AA260" }}>
                        ${detailRow.paid.toFixed(2)}
                      </TableCell>
                      <TableCell align="right" style={{ color: "#db3236" }}>
                        ${detailRow.unPaid.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function VendorDuePaidReport() {
  const dispatch = useDispatch();
  const vendorDuePaidData = useSelector(
    (state) => state?.reports?.vendordueReport
  );
  const allVendors = useSelector((state) => state?.reports?.allVendors);

  const defaultProps = {
    options: allVendors.filter((v) => v.active === 1),
    getOptionLabel: (option) => option?.vname,
  };

  const isLoading = useSelector((state) => state?.reports?.isLoading);

  useEffect(() => {
    dispatch(vendordueReport());
    dispatch(getAllVendor());
  }, [dispatch]);

  return (
    <Container style={{ marginTop: "75px" }}>
      <Grid
        container
        justifyContent="space-between"
        style={{ padding: "2%", backgroundColor: "#fff" }}
      >
        <Grid>
          <h1>Vendor Based Due/Paid Report</h1>
        </Grid>
        <Grid>
          <Autocomplete
            style={{ width: "200px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filter by Vendor"
                variant="outlined"
              />
            )}
            {...defaultProps}
            onChange={(event, value) => {
              if (value) {
                dispatch(vendordueReportFilter(value?.id));
                return;
              }
              dispatch(vendordueReport());
            }}
          />
        </Grid>
      </Grid>
      <Divider />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell width={50} />
              <TableCell width={300}>Vendor Name</TableCell>
              <TableCell width={100} align="right">
                Total Paid
              </TableCell>
              <TableCell width={100} align="right">
                Total Unpaid
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
                  colSpan={4}
                  align="center"
                >
                  <CircularProgress
                    size={25}
                    thickness={4}
                    sx={{ mt: 3, ml: 1 }}
                  />
                </TableCell>
              </TableRow>
            ) : vendorDuePaidData.length > 0 ? (
              vendorDuePaidData?.map((row) => (
                <Row key={row?.vendor?.name} row={row} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
