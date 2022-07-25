import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function PersonalRefForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Reference
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="Address number of  Laboral Reference"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="addiress2"
            name="addiress2"
            label="Telephone"
            fullWidth
            autoComplete="Telephone number of  Laboral Reference"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PersonalRefForm;
