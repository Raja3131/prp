import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVendor, updateVendor } from "../../actions/vendor";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VendorForm from "./VendorForm";
import VendorUserForm from "./VendorUserForm";
import Review from "./Review";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "react-simple-snackbar";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const steps = ["Create Vendor", "Select Vendor User", "Review"];

function getStepContent(step, formik, reviewVal) {
  switch (step) {
    case 0:
      return <VendorForm formik={formik} />;
    case 1:
      return <VendorUserForm formik={formik} reviewVal={reviewVal} />;
    case 2:
      return <Review reviewVal={reviewVal} />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [openSnackbar] = useSnackbar();

  const dispatch = useDispatch();
  const createdVendorData = useSelector(
    (state) => state.vendors.vendorCreatedData
  );
  const isLoading = useSelector((state) => state.vendors.isLoading);

  useEffect(() => {
    dispatch({ type: "END_LOADING" });
  }, [dispatch]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const vendorFormik = useFormik({
    initialValues: {
      vendorName: "",
    },
    validationSchema: vendorValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        createVendor(values, openSnackbar, () => {
          handleNext(0);
          resetForm();
        })
      );
    },
  });

  const vendorUserFormik = useFormik({
    initialValues: {
      primaryContact: null,
      secondaryContact: null,
    },
    validationSchema: vendorUserValidationSchema,
    onSubmit: (values) => {
      dispatch({
        type: "SET_VENDOR_USER",
        payload: {
          ...createdVendorData,
          primaryContact: values.primaryContact,
          secondaryContact: values.secondaryContact,
        },
      });
      handleNext(1);
    },
  });

  const onClickFinalSubmit = (active) => {
    dispatch(
      updateVendor(
        {
          id: createdVendorData.id,
          primaryContact: createdVendorData.primaryContact,
          secondaryContact: createdVendorData.secondaryContact,
        },
        openSnackbar,
        () => {
          vendorFormik.resetForm();
          vendorUserFormik.resetForm();
          handleNext(1);
        }
      )
    );
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
            Create Vendor
          </Typography>
          {activeStep !== steps.length && (
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          )}
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h5" gutterBottom align="center">
                      <Div>{"New Vendor is Created"}</Div>
                    </Typography>
                    <Box textAlign="center">
                      <Button
                        align="center"
                        variant="contained"
                        onClick={() => setActiveStep(0)}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        Create Another Vendor
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <form
                  onSubmit={
                    activeStep === 0
                      ? vendorFormik.handleSubmit
                      : activeStep === 1
                      ? vendorUserFormik.handleSubmit
                      : (e) => e.preventDefault()
                  }
                >
                  {getStepContent(
                    activeStep,
                    activeStep === 0 ? vendorFormik : vendorUserFormik,
                    createdVendorData
                  )}
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                    style={{ marginTop: "20px" }}
                  >
                    {activeStep === 2 && (
                      <Button
                        onClick={handleBack}
                        sx={{ mt: 3, ml: 1 }}
                        disabled={isLoading}
                      >
                        Back
                      </Button>
                    )}

                    <Button
                      disabled={
                        activeStep === 0
                          ? !(vendorFormik.isValid && vendorFormik.dirty)
                          : !(
                              vendorUserFormik.isValid && vendorUserFormik.dirty
                            )
                      }
                      onClick={
                        activeStep === steps.length - 1
                          ? () => onClickFinalSubmit(createdVendorData.active)
                          : (e) => {
                              e.stopPropagation();
                              e.nativeEvent.stopImmediatePropagation();
                            }
                      }
                      variant="contained"
                      type="submit"
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {isLoading ? (
                        <CircularProgress
                          color="info"
                          size={25}
                          thickness={4}
                          sx={{ mt: 3, ml: 1 }}
                        />
                      ) : activeStep === steps.length - 1 ? (
                        "Update"
                      ) : (
                        "Next"
                      )}
                    </Button>
                  </Box>
                </form>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

const vendorValidationSchema = Yup.object({
  vendorName: Yup.string().required("Vendor name is required"),
});

const vendorUserValidationSchema = Yup.object({
  primaryContact: Yup.string()
    .required("Primary contact is required")
    .nullable(),
  secondaryContact: Yup.string().nullable(),
});
