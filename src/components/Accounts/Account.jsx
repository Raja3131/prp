import React, { useEffect } from "react";
import styles from "./Account.module.css";
import { Button, Container, Grid } from "@material-ui/core";
import { AddCircleOutlineRounded } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addBankAccount, addPayPalAccount } from "../../actions/account";
import { listWallet } from "../../actions/walletActions";

const Account = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state?.walletPayment?.wallet);

  useEffect(() => {
    dispatch(listWallet());
  }, [dispatch]);

  const addPaypalAccount = () => {
    dispatch(addPayPalAccount(window.location.href));
  };

  const addbankAccount = () => {
    dispatch(addBankAccount(window.location.href));
  };

  return (
    <>
      <Container style={{ marginTop: "75px" }}>
        <div className={styles.accountLayout}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h3 style={{ color: "rgb(25, 118, 210)" }}>Bank Accounts</h3>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <div className={styles.accountLayoutContainer}>
              <br />
              <Button
                onClick={() => {
                  addbankAccount();
                }}
              >
                <AddCircleOutlineRounded />
              </Button>
              <p>Add Bank Account</p>
            </div>
            {rows?.achData &&
              rows.achData.map((values) => {
                return (
                  <div
                    className={styles.accountLayoutContainer}
                    key={values?._id}
                  >
                    <br />
                    <p>{values?.bank?.name}</p>
                    <p>
                      {values?.account?.accountNumber.replace(
                        /\d(?=\d{4})/g,
                        "*"
                      )}
                    </p>
                  </div>
                );
              })}
          </Grid>
          <br />
          {}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h3 style={{ color: "rgb(25, 118, 210)" }}>PayPal Accounts</h3>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <div className={styles.accountLayoutContainer}>
              <br />
              <Button onClick={() => addPaypalAccount()}>
                <AddCircleOutlineRounded />
              </Button>
              <p>Add Paypal Account</p>
            </div>
            {rows?.paypalData &&
              rows.paypalData.map((values) => {
                return (
                  <div
                    className={styles.accountLayoutContainer}
                    key={values?._id}
                  >
                    <br />
                    <p>
                      {values?.firstName} {values?.lastName}
                    </p>
                    <p>{values?.email}</p>
                  </div>
                );
              })}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Account;
