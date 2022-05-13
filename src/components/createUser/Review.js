import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { sampleData } from "./VendorUserForm";

function search(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].val === nameKey) {
      return myArray[i];
    }
  }
}

export default function Review({ reviewVal }) {
  const primaryContact = search(reviewVal.primaryContact, sampleData);
  const secondaryContact = search(reviewVal.secondaryContact, sampleData);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Vendor
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Vendor Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{reviewVal.vname}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Vendor Contact details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Primary contact</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{primaryContact.title}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Secondary contact</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {reviewVal.secondaryContact
                    ? secondaryContact.title
                    : "not specified"}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
