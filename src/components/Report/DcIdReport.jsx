import React, { useEffect } from "react";
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
  TextField,
} from "@material-ui/core";
import { DcIdReport, DcIdReportFilter } from "../../actions/reportAction";
import { useDispatch, useSelector } from "react-redux";
import { getDcId } from "../../actions/invoiceActions";
import { Autocomplete } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";

const DcIdReports = () => {
  const dispatch = useDispatch();
  const DcIdPaidData = useSelector((state) => state?.reports?.DcidReport);
  const DCIds = useSelector((state) => state.invoices.DCid);

  const defaultProps = {
    options: DCIds,
    getOptionLabel: (option) => option?.dc_name,
  };
  const isLoading = useSelector((state) => state?.reports?.isLoading);

  useEffect(() => {
    dispatch(DcIdReport());
    dispatch(getDcId());
  }, [dispatch]);

  return (
    <>
      <Container style={{ marginTop: "75px" }}>
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "2%", backgroundColor: "#fff" }}
        >
          <Grid>
            <h1> DC-Id Based Due/Paid Report</h1>
          </Grid>
          <Grid>
            <Autocomplete
              style={{ width: "200px" }}
              label="select DC-Id"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Filter by DC Id"
                  variant="outlined"
                />
              )}
              {...defaultProps}
              onChange={(event, value) => {
                if (value) {
                  dispatch(DcIdReportFilter(value?.id));
                  return;
                }
                dispatch(DcIdReport());
              }}
            />
          </Grid>
        </Grid>
        <Divider />
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell width={300}>Vendor Name</TableCell>
                <TableCell align="right" width={100}>
                  Total Paid
                </TableCell>
                <TableCell align="right" width={100}>
                  Total Unpaid
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {DcIdPaidData.length || isLoading ? (
                isLoading ? (
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
                ) : (
                  DcIdPaidData?.map((row) => (
                    <TableRow>
                      <TableCell
                        scope="row"
                        style={{ fontSize: 16 }}
                        width={300}
                      >
                        {row?.dcId?.dcName.toUpperCase()}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "#1AA260" }}
                        width={100}
                      >
                        <b>${row?.paid.toFixed(2)}</b>
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "#db3236" }}
                        width={100}
                      >
                        <b>${row?.unPaid.toFixed(2)}</b>
                      </TableCell>
                    </TableRow>
                  ))
                )
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
    </>
  );
};

export default DcIdReports;
