import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function vendorUserForm({ formik, reviewVal }) {
  const defaultProps = {
    options: sampleData,
    getOptionLabel: (option) => option.title,
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vendor User
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Autocomplete
            {...defaultProps}
            id="primaryContact"
            onChange={(e, value) =>
              formik.setFieldValue("primaryContact", value?.val)
            }
            defaultValue={sampleData.find((v) => {
              return v.val === formik.values.primaryContact ? v.title : null;
            })}
            onBlur={() =>
              formik.setTouched({
                ...formik.touched,
                primaryContact: true,
              })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                error={
                  formik.touched.primaryContact &&
                  Boolean(formik.errors.primaryContact)
                }
                helperText={
                  formik.touched.primaryContact && formik.errors.primaryContact
                }
                name="primaryContact"
                label="Select primary user"
                variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            {...defaultProps}
            id="secondaryContact"
            onChange={(e, value) =>
              formik.setFieldValue("secondaryContact", value?.val)
            }
            defaultValue={sampleData.find((v) => {
              return v.val === formik.values.secondaryContact ? v.title : null;
            })}
            onBlur={() =>
              formik.setTouched({
                ...formik.touched,
                secondaryContact: true,
              })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                error={
                  formik.touched.secondaryContact &&
                  Boolean(formik.errors.secondaryContact)
                }
                helperText={
                  formik.touched.secondaryContact &&
                  formik.errors.secondaryContact
                }
                name="secondaryContact"
                label="Select secondary user"
                variant="standard"
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export const sampleData = [{ title: "An Vendor User", val: "1" }];
