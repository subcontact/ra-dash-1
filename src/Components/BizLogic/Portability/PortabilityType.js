import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PortabilitySelect from "./PortabilitySelect";

function PortabilityType() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Instructions: Enter portability details and press NEXT to launch
        portability request
      </Typography>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <PortabilitySelect />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form /*className={classes.container} noValidate*/>
            <TextField
              id="date"
              label="Request Date"
              type="date"
              defaultValue="2017-05-24"
              //className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="time"
              label="Time"
              type="time"
              defaultValue="07:30"
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </form>
          <TextField
            required
            id="contractDur"
            name="contractDur"
            label="Contract Duration"
            fullWidth
          />
          <TextField
            required
            id="lineNumber"
            name="lineNumber"
            label="Line Number"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PortabilityType;
