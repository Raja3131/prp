import React, { useState } from "react";
import useStyles from "./styles";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin } from "../../actions/auth";
import Button from "@mui/material/Button";
import {
  Avatar,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useSnackbar } from "react-simple-snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { userData } from "../../utils/config";
import { useFormik } from "formik";
import * as Yup from "yup";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line
  const [openSnackbar] = useSnackbar();

  const handleShowPassword = () => setShowPassword(!showPassword);

  if (userData) {
    history.push("/invoices");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(signin(values, openSnackbar, setLoading, resetForm));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={2}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <TextField
                name="email"
                variant="outlined"
                fullWidth
                label="Email Address"
                onBlur={() =>
                  formik.setTouched({
                    ...formik.touched,
                    email: true,
                  })
                }
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
                onBlur={() =>
                  formik.setTouched({
                    ...formik.touched,
                    password: true,
                  })
                }
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <br />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                onClick={() => {
                  history.push("/forgot");
                }}
              >
                Forgot Password
              </Button>
            </Grid>
          </Grid>
          <div className={styles.buttons} style={{ margin: "0px" }}>
            <div>
              {loading ? (
                <CircularProgress />
              ) : (
                <button
                  type="submit"
                  className={styles.loginBtn}
                  disabled={loading}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;

const validationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
