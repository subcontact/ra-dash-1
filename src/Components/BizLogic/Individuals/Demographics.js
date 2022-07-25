import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import { Button, Divider } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

// revisar
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//this domain is not working
const gender = [
  {
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  }
];

const state = {
  age: ""
};

// this domain is not working properly
function handleChange(event) {
  setState({ [event.target.name]: event.target.value });
}

function ListForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Demographics
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="age-helper"> [example] Age</InputLabel>
          <Select
            value={state.age}
            fullWidth
            onChange={handleChange}
            input={<Input name="age" id="age-helper" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Select the age of the customer</FormHelperText>
        </Grid>

        <Grid item xs={12} sm={6} />

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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="gender"
            name="gender"
            label="Gender"
            fullWidth
            autoComplete="gender"
            choices={[
              { name: "Male", id: "Male" },
              { name: "Female", id: "Female" }
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="marital_status"
            id="marital_status"
            name="gender"
            label="Marital Status"
            fullWidth
            autoComplete="marital_status"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="birthDate"
            name="birthDate"
            label="Birthday"
            fullWidth
            autoComplete="birthDate"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="countryOfBirth"
            name="countryOfBirth"
            label="Country Of Birth"
            fullWidth
            autoComplete="countryOfBirth"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch defaultChecked value="false" color="primary" />}
            label="Online Invoice"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch defaultChecked value="true" color="primary" />}
            label="Promotion Acceptance"
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
