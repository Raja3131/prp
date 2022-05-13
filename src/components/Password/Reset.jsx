import React, { useState } from "react";
import { Button, Paper, Typography, Container, Grid } from "@material-ui/core";
import useStyles from "./styles";
import Field from "../Login/Field";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import { reset } from "../../actions/auth";

const Reset = () => {
  const classes = useStyles();
  const [Password] = useState({
    currentPassword: "",
    changePassword: "",
    confirmPassword: "",
  });
  const [openSnackbar] = useSnackbar();
  const passwordSchema = yup.object().shape({
    currentPassword: yup.string().required("Current Password is required"),
    changePassword: yup.string().required("Change Password is required"),
    confirmPassword: yup.string().required("Confirm Password is required"),
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { token } = useParams();

  const handleSubmit = (values) => {
    dispatch(
      reset(
        { password: values.confirmPassword, token: token },
        openSnackbar,
        history
      )
    );
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} variant="outlined">
          <Typography variant="h6" gutter="5">
            Change Password
          </Typography>
          <Formik
            initialValues={Password}
            validationSchema={passwordSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            {({ values, touched, errors, handleBlur, handleChange }) => {
              return (
                <Form className={classes.root} noValidate autoComplete="off">
                  <Grid container spacing={2}>
                    <Field
                      name="currentPassword"
                      id="currentPassword"
                      label="Current Password"
                      value={values.currentPassword}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      type={showPassword ? "text" : "password"}
                      handleShowPassword={handleShowPassword}
                    />
                    {touched.currentPassword && errors.currentPassword && (
                      <div
                        className="help-block text-warn"
                        style={{ color: "#d15a5a" }}
                      >
                        {errors.currentPassword}
                      </div>
                    )}
                    <Field
                      name="changePassword"
                      id="changePassword"
                      label="Change Password"
                      value={values.changePassword}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      handleShowPassword={handleShowPassword}
                    />
                    {touched.changePassword && errors.changePassword && (
                      <div
                        className="help-block text-warn"
                        style={{ color: "#d15a5a" }}
                      >
                        {errors.changePassword}
                      </div>
                    )}
                    <Field
                      name="confirmPassword"
                      id="confirmPassword"
                      label="Confirm Password"
                      value={values.confirmPassword}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      handleShowPassword={handleShowPassword}
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <div
                        className="help-block text-warn"
                        style={{ color: "#d15a5a" }}
                      >
                        {errors.confirmPassword}
                      </div>
                    )}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Paper>
      </Container>
    </div>
  );
};

export default Reset;
