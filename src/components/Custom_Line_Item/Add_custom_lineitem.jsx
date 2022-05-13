import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "react-simple-snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory, useLocation } from "react-router-dom";
import {
  getItemsList,
  addCustomLineItem,
  getVendorList,
} from "../../actions/invoiceActions";

const theme = createTheme();

const validationSchema = Yup.object({
  name: Yup.string().required("Custom name is required"),
  lineItemId: Yup.string().required("Please select Line item"),
  vendorUserId: Yup.string().required("Please select Vendor user"),
});

export default function CreateUser() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [openSnackbar] = useSnackbar();

  const isLoading = useSelector((state) => state.invoices.isLoading);
  const itemList = useSelector((state) => state.invoices.itemList);
  const vendorList = useSelector((state) => state.invoices.getVendorList);

  useEffect(() => {
    dispatch(getItemsList());
    dispatch(getVendorList());
  }, [dispatch]);

  const defaultProps = {
    options: itemList,
    getOptionLabel: (option) =>
      option.lineItemId ? option.lineItemId?.name : option?.name,
  };
  const defaultProp2 = {
    options: vendorList,
    getOptionLabel: (option) =>
      option.vendorUserId
        ? option.vendorUserId.externalData.firstName +
          " " +
          option.vendorUserId.externalData.lastName
        : option?.externalData?.firstName +
          " " +
          option?.externalData?.lastName,
  };

  const formik = useFormik({
    initialValues: {
      lineItemId: location?.state?.lineItemId
        ? location?.state?.lineItemId.id
        : "",
      vendorUserId: location?.state?.vendorUserId
        ? location?.state?.vendorUserId.id
        : "",
      name: location?.state?.name ? location?.state?.name : "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addCustomLineItem(values, history, openSnackbar));
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            {location?.state ? "Update" : "Add"} Custom Line item
          </Typography>
          <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
              <React.Fragment>
                <React.Fragment>
                  <Grid container spacing={3} style={{ marginTop: "25px" }}>
                    <Grid item xs={12} sm={12} marginTop="60px">
                      <TextField
                        id="name"
                        name="name"
                        label="Custom name"
                        fullWidth
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Autocomplete
                        {...defaultProps}
                        id="lineItemId"
                        name="lineItemId"
                        defaultValue={
                          location?.state?.lineItemId
                            ? location?.state?.lineItemId
                            : null
                        }
                        onChange={(e, value) =>
                          formik.setFieldValue("lineItemId", value?.id)
                        }
                        onBlur={() =>
                          formik.setTouched({
                            ...formik.touched,
                            lineItemId: true,
                          })
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            error={
                              formik.touched.lineItemId &&
                              Boolean(formik.errors.lineItemId)
                            }
                            helperText={
                              formik.touched.lineItemId &&
                              formik.errors.lineItemId
                            }
                            name="lineItemId"
                            label="Select Line Item"
                            variant="standard"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Autocomplete
                        {...defaultProp2}
                        id="vendorUserId"
                        name="vendorUserId"
                        defaultValue={
                          location?.state?.vendorUserId
                            ? location?.state?.vendorUserId
                            : null
                        }
                        onChange={(e, value) =>
                          formik.setFieldValue("vendorUserId", value?.id)
                        }
                        onBlur={() =>
                          formik.setTouched({
                            ...formik.touched,
                            vendorUserId: true,
                          })
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            error={
                              formik.touched.vendorUserId &&
                              Boolean(formik.errors.vendorUserId)
                            }
                            helperText={
                              formik.touched.vendorUserId &&
                              formik.errors.vendorUserId
                            }
                            name="vendorUserId"
                            label="Select Vendor user"
                            variant="standard"
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </React.Fragment>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  style={{ marginTop: "25px" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {isLoading ? (
                      <CircularProgress
                        color="info"
                        size={25}
                        thickness={4}
                        sx={{ mt: 3, ml: 1 }}
                      />
                    ) : location?.state ? (
                      "Update"
                    ) : (
                      "Create"
                    )}
                  </Button>
                </Box>
              </React.Fragment>
            </form>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
