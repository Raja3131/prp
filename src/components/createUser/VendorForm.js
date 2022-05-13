import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function VendorForm({ formik }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vendor Create
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="vendorName"
            name="vendorName"
            label="Enter Vendor Name"
            fullWidth
            autoComplete="vendorName"
            variant="standard"
            onBlur={() =>
              formik.setTouched({
                ...formik.touched,
                vendorName: true,
              })
            }
            value={formik.values.vendorName}
            onChange={formik.handleChange}
            error={
              formik.touched.vendorName && Boolean(formik.errors.vendorName)
            }
            helperText={formik.touched.vendorName && formik.errors.vendorName}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
