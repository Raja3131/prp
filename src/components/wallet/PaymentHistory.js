import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import {
  Container,
  Grid,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { Typography as MuiTypography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "sweetalert2/dist/sweetalert2.min.css";
import { userData } from "../../utils/config";
import { listWallet } from "../../actions/walletActions";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles2 = makeStyles((theme) => ({
  table: { minWidth: 500 },
  headerContainer: {
    display: "flex",
    paddingTop: theme.spacing(1),
    paddingLeft: "0",
    paddingRight: "0",
    background: "#FFFFFF",
  },
}));

const PaymentHistory = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const balance = useSelector(
    (state) => state?.walletPayment?.wallet?.availableBalance
  );
  const totalWithdraw = useSelector(
    (state) => state?.walletPayment?.wallet?.totalWithdraw
  );
  const transactions = useSelector((state) =>
    state?.walletPayment?.wallet?.recentTransactions?.reverse()
  );
  const isLoading = useSelector((state) => state?.walletPayment?.isLoading);
  // eslint-disable-next-line

  useEffect(() => {
    dispatch(listWallet());
    // eslint-disable-next-line
  }, [location]);

  const classes = useStyles2();

  if (!userData) {
    history.push("/");
  }

  return (
    <React.Fragment>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid>
            <Card>
              <CardContent>
                <div>
                  <div>
                    <MuiTypography variant="h6" style={{ fontSize: "30px" }}>
                      $
                      {!isLoading ? (
                        balance ? (
                          parseFloat(balance).toFixed(2)
                        ) : (
                          (0).toFixed(2)
                        )
                      ) : (
                        <CircularProgress
                          style={{ marginLeft: "5px" }}
                          size={25}
                          thickness={4}
                          sx={{ mt: 3, ml: 1 }}
                        />
                      )}
                    </MuiTypography>
                    <MuiTypography variant="subtitle1">Balance</MuiTypography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {userData.user.role === "vendor" && (
            <Grid>
              <Card>
                <CardContent>
                  <div>
                    {/* {icon} */}
                    <div>
                      <MuiTypography variant="h6" style={{ fontSize: "30px" }}>
                        $
                        {!isLoading ? (
                          totalWithdraw ? (
                            parseFloat(totalWithdraw).toFixed(2)
                          ) : (
                            (0).toFixed(2)
                          )
                        ) : (
                          <CircularProgress
                            style={{ marginLeft: "5px" }}
                            size={25}
                            thickness={4}
                            sx={{ mt: 3, ml: 1 }}
                          />
                        )}
                      </MuiTypography>
                      <MuiTypography variant="subtitle1">
                        Withdraw
                      </MuiTypography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          className={classes.headerContainer}
          style={{ padding: "2%" }}
        >
          <Grid />
          <Grid>
            <h1>Recent Transactions</h1>
          </Grid>
          {/*<Grid>*/}
          {/*  <Button*/}
          {/*    variant="contained"*/}
          {/*    color="primary"*/}
          {/*    onClick={() => history.push(`/transaction-history`)}*/}
          {/*    style={{ marginLeft: "5px" }}*/}
          {/*  >*/}
          {/*    Transaction History*/}
          {/*  </Button>*/}
          {/*</Grid>*/}
          <Grid>
            {(userData.user.role === "admin" ||
              userData.user.role === "superAdmin") && (
              <Button
                variant="contained"
                color="default"
                onClick={() => history.push(`/add-wallet-payment`)}
                style={{ marginLeft: "5px" }}
              >
                Fund Wallet
              </Button>
            )}
          </Grid>
        </Grid>
        <Divider />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" width={300}>
                Invoice Number/Transfer Ref No
              </TableCell>
              <TableCell align="center" width={300}>
                Date
              </TableCell>
              <TableCell align="right" width={300}>
                Amount
              </TableCell>
              <TableCell align="center" width={300}>
                Type
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading ? (
              transactions ? (
                transactions.map((row) => (
                  <TableRow>
                    <TableCell align="center">
                      {row.invoiceNumber
                        ? row.invoiceNumber
                        : row.transferRefNo}
                    </TableCell>
                    <TableCell align="center">
                      {moment(row.date).format("DD-MM-YYYY hh:mm a ")}
                    </TableCell>
                    <TableCell align="right">
                      ${row.amount.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      {row.status
                        ? `${row.transactionType.toUpperCase()}(${row.status})`
                        : row.transactionType.toUpperCase()}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={12} align="center">
                    No Recent Transaction
                  </TableCell>
                </TableRow>
              )
            ) : (
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
            )}
          </TableBody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default PaymentHistory;
