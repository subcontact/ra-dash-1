import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, Divider } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

function ListForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Identity
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={24} sm={12}>
          <TextField
            required
            id="personType"
            name="personType"
            label="Person Type"
            fullWidth
            autoComplete="pType"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="idType"
            name="idType"
            label="ID Type"
            fullWidth
            autoComplete="idtype"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="idNumber"
            name="idNumber"
            label="ID Number"
            fullWidth
            autoComplete="idNumber"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="idProvince"
            name="idProvince"
            label="ID Province"
            fullWidth
            autoComplete="idProvince"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="idDistrict"
            name="idDistrict"
            label="ID District"
            fullWidth
            autoComplete="idDistrict"
          />
        </Grid>

        <Grid item xs={12} align="Right">
          <Button variant="contained" color="primary" align="Right">
            <SaveIcon />
            Save
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ListForm;
