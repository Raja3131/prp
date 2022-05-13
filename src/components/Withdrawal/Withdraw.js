import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import * as Yup from "yup";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Input as MuiInput,
  isWidthUp,
  Menu,
  MenuItem,
  Typography as MuiTypography,
  Divider as MuiDivider,
  TextField,
} from "@material-ui/core";
import { listWallet } from "../../actions/walletActions";
import { spacing } from "@material-ui/system";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { withdrawAmount } from "../../actions/withdrawActions";
import WithdrawList from "./WithdrawList";
import { useSnackbar } from "react-simple-snackbar";

const Wrapper = styled.div(spacing);
const Typography = styled(MuiTypography)(spacing);
const Input = styled(MuiInput)(spacing);
const Divider = styled(MuiDivider)(spacing);

const Withdraw = (props) => {
  const [openSnackbar] = useSnackbar();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")).user.role);
  }, []);

  useEffect(() => {
    dispatch(listWallet());
  }, [dispatch]);

  const walletDetails = useSelector((state) => state?.walletPayment?.wallet);
  const isLoading = useSelector((state) => state?.walletPayment?.isLoading);
  const { width, fetchError } = props;

  const history = useHistory();

  const handleFormSubmit = async (
    values,
    setErrors,
    setStatus,
    setSubmitting
  ) => {
    try {
      setSubmitting(true);
      let payload = {
        amount: values.total_amount,
        accountId: values.account_ref_id,
      };
      dispatch(withdrawAmount(payload, history, openSnackbar));
    } catch (error) {
      const message = error.message || "Something went wrong";
      setStatus({ success: false });
      setErrors({ submit: message });
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    total_amount: Yup.number()
      .required("Amont is required")
      .min(1, "Minimum Amount is $1"),
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (fetchError) {
    return (
      <Alert severity="error">
        {fetchError.message || "Something went wrong"}
      </Alert>
    );
  }

  return (
    <>
      {user === "vendor" ? (
        <Wrapper
          p={isWidthUp("md", width) ? 20 : 0}
          style={{ margin: "50px 250px" }}
        >
          <Grid justifyContent="space-between" container spacing={6}>
            <Grid item></Grid>
          </Grid>

          <div style={{ height: "1rem" }} />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <Card style={{ margin: "50px 250px" }}>
              <Typography
                style={{ fontSize: 21, paddingLeft: "50px" }}
                variant="h4"
                gutterBottom
              >
                Withdraw
              </Typography>
              <CardContent>
                <Formik
                  initialValues={{
                    total_amount: "",
                    type: "paypal",
                    email: "",
                    account_ref_id: "",
                    account: null,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(
                    values,
                    { setErrors, setStatus, setSubmitting }
                  ) => {
                    try {
                      setSubmitting(true);
                      let payload = {
                        amount: values.total_amount,
                        accountId: values.account_ref_id,
                      };
                      dispatch(
                        withdrawAmount(
                          payload,
                          history,
                          openSnackbar,
                          setSubmitting
                        )
                      );
                    } catch (error) {
                      const message = error.message || "Something went wrong";
                      setSubmitting(false);
                      setStatus({ success: false });
                      setErrors({ submit: message });
                    }
                  }}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                    setValues,
                  }) => (
                    <form
                      noValidate
                      onSubmit={handleSubmit}
                      style={{
                        margin: `0 ${isWidthUp("md", width) ? "5rem" : 0}`,
                      }}
                    >
                      {errors.submit && (
                        <Alert mt={2} mb={1} severity="warning">
                          {errors.submit}
                        </Alert>
                      )}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>Amount</Typography>
                        <Typography style={{ color: "red" }}>
                          {errors.total_amount}
                        </Typography>
                      </div>
                      <Input
                        // startAdornment={
                        //   <InputAdornment position="start">
                        //     <DollarSign />
                        //   </InputAdornment>
                        // }
                        type="number"
                        name="total_amount"
                        style={{
                          border: "1px solid black",
                          borderRadius: "4px",
                          padding: 6,
                        }}
                        placeholder={`Available Balance: $${(walletDetails?.availableBalance).toFixed(
                          2
                        )}`}
                        value={values.total_amount}
                        error={Boolean(
                          touched.total_amount && errors.total_amount
                        )}
                        fullWidth
                        // helperText={touched.total_amount && errors.total_amount}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        my={3}
                      />

                      <Typography>Type</Typography>
                      <TextField
                        fullWidth
                        className="px-2 my-2"
                        variant="outlined"
                        name="type"
                        id="type"
                        select
                        value={values.type}
                        onChange={handleChange}
                        error={touched.type && Boolean(errors.type)}
                        // helperText={touched.type && errors.type}
                      >
                        <MenuItem value={"ach"}>Ach</MenuItem>
                        <MenuItem value={"paypal"}>PayPal</MenuItem>
                      </TextField>

                      <Grid container style={{ marginTop: "0.7rem" }}>
                        <Grid item xs={6}>
                          <div
                            style={{
                              minWidth: "9rem",
                              display: "inline-block",
                            }}
                          >
                            <Card
                              my={4}
                              p={2}
                              mx={2}
                              style={{ cursor: "pointer" }}
                            >
                              <Button variant="outlined" onClick={handleClick}>
                                <Typography variant="h6">
                                  {values.type === "paypal"
                                    ? values.email || "Choose Account"
                                    : values.account || "Choose Account"}
                                </Typography>
                              </Button>
                            </Card>
                            <Menu
                              style={{
                                marginTop: "2.5%",
                              }}
                              anchorEl={anchorEl}
                              open={Boolean(anchorEl)}
                              onClose={handleClose}
                            >
                              {walletDetails &&
                                walletDetails[
                                  values.type === "paypal"
                                    ? "paypalData"
                                    : "achData"
                                ]?.map((data, index) => {
                                  return (
                                    <MenuItem
                                      style={{
                                        backgroundColor: "#f2f2f2",
                                        minWidth: 170,
                                      }}
                                      onClick={() => {
                                        if (values.type === "paypal") {
                                          setValues({
                                            ...values,
                                            account_ref_id: data._id,
                                            email: data.email,
                                          });
                                        } else if (values.type === "ach") {
                                          setValues({
                                            ...values,
                                            account_ref_id: data._id,
                                            account: data.account.accountNumber,
                                          });
                                        }
                                        handleClose();
                                      }}
                                      key={index}
                                    >
                                      <Typography>
                                        {data.email ||
                                          data.account.accountNumber}
                                      </Typography>
                                    </MenuItem>
                                  );
                                })}
                            </Menu>
                          </div>
                        </Grid>
                        <Grid item xs={6} justify="flex-end">
                          <Link
                            style={{
                              textDecoration: "none",
                              display: "inline",
                              float: "right",
                            }}
                            to="/accounts"
                          >
                            <Typography
                              color="primary"
                              variant="h6"
                              style={{ display: "inline" }}
                            >
                              Add New Account
                            </Typography>
                          </Link>
                        </Grid>
                      </Grid>
                      <Divider mb={6} mt={4} />
                      <div style={{ textAlign: "center" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          disabled={isSubmitting}
                        >
                          Withdraw
                        </Button>
                      </div>
                    </form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          )}
        </Wrapper>
      ) : (
        <WithdrawList />
      )}
    </>
  );
};

export default Withdraw;
