import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Button, TextField, Container } from "@material-ui/core";
import styles from "./addwallet.module.css";
import { AddWalletPayment } from "../../actions/walletActions";
import { useFormik } from "formik";
import * as Yup from "yup";
import CircularProgress from "@material-ui/core/CircularProgress";

const validationSchema = Yup.object({
  amount: Yup.number().min(5).required("Amount is required"),
});

const ADDWAllet = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      amount: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    let params = {
      amount: values.amount,
      redirect_success_url: window.location.origin + "/payment-verification",
      redirect_failure_url: window.location.origin + "/payment-failed",
    };
    dispatch(AddWalletPayment(params));
  };

  return (
    <Container>
      <div className={styles.invoiceLayout}>
        <form onSubmit={formik.handleSubmit}>
          <h3>Amount</h3>
          <Grid item style={{ paddingTop: "25px", paddingBottom: "25px" }}>
            <TextField
              type="number"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              error={formik.touched.amount && Boolean(formik.errors.amount)}
              helperText={formik.touched.amount && formik.errors.amount}
              style={{ width: "50%" }}
            ></TextField>
          </Grid>
          <Grid item style={{ paddingTop: "25px", paddingBottom: "25px" }}>
            <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1 }}>
              {formik.isSubmitting ? (
                <CircularProgress
                  color="primary"
                  size={25}
                  thickness={4}
                  sx={{ mt: 3, ml: 1 }}
                />
              ) : (
                "Add"
              )}
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default ADDWAllet;
