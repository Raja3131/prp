import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { createUsers } from "../../actions/auth";
import { getDcId } from "../../actions/invoiceActions";
import { useSnackbar } from "react-simple-snackbar";
import { styled } from "@mui/material/styles";
import {
  MenuItem,
  Input,
  ListItemText,
  FormHelperText,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useFormik } from "formik";
import * as Yup from "yup";
import { initialValuesCreateUser } from "./InitialValues";

const theme = createTheme();

const validationSchema = Yup.object({
  role: Yup.string().required("Role is required"),
  firstName: Yup.string("Enter first name").required("First name is required"),
  lastName: Yup.string("Enter last name").required("Last name is required"),
  email: Yup.string("Enter email")
    .email("Enter a valid email")
    .required("Email is required"),
  dcIds: Yup.array().required("DC Id is required"),
});

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function CreateUser() {
  const dispatch = useDispatch();
  const [openSnackbar] = useSnackbar();

  useEffect(() => {
    dispatch(getDcId());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: initialValuesCreateUser,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const DCIds = useSelector((state) => state.invoices.DCid);

  const defaultProps = {
    options: userTypes,
    getOptionLabel: (option) => option.title,
  };

  const handleSubmit = (values) => {
    dispatch(createUsers(values, openSnackbar, setLoading, setCreated, formik));
    setLoading(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Create User
          </Typography>
          <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
              {created ? (
                <React.Fragment>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                      <Typography variant="h5" gutterBottom align="center">
                        <Div>{"New User is Created"}</Div>
                      </Typography>
                      <Box textAlign="center">
                        <Button
                          align="center"
                          variant="contained"
                          onClick={() => setCreated(false)}
                          sx={{ mt: 3, ml: 1 }}
                        >
                          Create Another User
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <React.Fragment>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={12} marginTop="20px">
                        <Autocomplete
                          {...defaultProps}
                          id="role"
                          name="role"
                          // value={formik.values.role}
                          onChange={(e, value) =>
                            formik.setFieldValue("role", value?.id)
                          }
                          onBlur={() =>
                            formik.setTouched({
                              ...formik.touched,
                              role: true,
                            })
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              error={
                                formik.touched.role &&
                                Boolean(formik.errors.role)
                              }
                              helperText={
                                formik.touched.role && formik.errors.role
                              }
                              name="role"
                              label="Select Role"
                              variant="standard"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="firstName"
                          name="firstName"
                          label="First name"
                          fullWidth
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.firstName &&
                            Boolean(formik.errors.firstName)
                          }
                          helperText={
                            formik.touched.firstName && formik.errors.firstName
                          }
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="lastName"
                          name="lastName"
                          label="Last name"
                          fullWidth
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.lastName &&
                            Boolean(formik.errors.lastName)
                          }
                          helperText={
                            formik.touched.lastName && formik.errors.lastName
                          }
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="email"
                          name="email"
                          label="Email"
                          fullWidth
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={formik.touched.email && formik.errors.email}
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                          autoComplete="email"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl
                          fullWidth
                          error={
                            formik.touched.dcIds && !formik.values.dcIds.length
                          }
                        >
                          <InputLabel id="dcId">Select DC Ids</InputLabel>
                          <Select
                            label="dcId"
                            id="dcIds"
                            name="dcIds"
                            fullWidth
                            multiple
                            value={formik.values.dcIds}
                            onChange={(e) =>
                              formik.setFieldValue(
                                "dcIds",
                                typeof e.target.value === "string"
                                  ? e.target.value.split(",")
                                  : e.target.value
                              )
                            }
                            onBlur={() =>
                              formik.setTouched({
                                ...formik.touched,
                                dcIds: true,
                              })
                            }
                            input={<Input />}
                            renderValue={(selected) =>
                              selected
                                .map((obj, ind) => DCIds[ind].dc_name)
                                .join(", ")
                            }
                          >
                            {DCIds.map((values) => {
                              return (
                                <MenuItem key={values.id} value={values.id}>
                                  <ListItemText primary={values.dc_name} />
                                </MenuItem>
                              );
                            })}
                          </Select>
                          <FormHelperText>
                            {formik.touched.dcIds &&
                              !formik.values.dcIds.length &&
                              "Atleast one dc id is required"}
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                    style={{ marginTop: "20px" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {loading ? (
                        <CircularProgress
                          color="info"
                          size={25}
                          thickness={4}
                          sx={{ mt: 3, ml: 1 }}
                        />
                      ) : (
                        "Create"
                      )}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </form>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

const userTypes = [
  { title: "Vendor", id: "vendor" },
  { title: "Site Manager", id: "siteManager" },
  { title: "Accountant", id: "accountant" },
  { title: "Admin", id: "admin" },
];
