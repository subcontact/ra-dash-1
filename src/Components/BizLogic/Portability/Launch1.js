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
import NestedList from "./NestedList";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

function Launch1(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <NestedList />
        </Grid>

        <Grid item container direction="column" xs={12} sm={6}>
          <TextField
            id="standard-read-only-input"
            label="Date of request"
            defaultValue="03/03/2018"
            margin="normal"
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="Time of Request"
            defaultValue="07:40"
            margin="normal"
            InputProps={{
              readOnly: true
            }}
          />

          <TextField
            id="standard-read-only-input"
            label="Date of Response"
            defaultValue="03/03/2018"
            margin="normal"
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="Time of Response"
            defaultValue="07:44"
            margin="normal"
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="Portability type"
            defaultValue="Portability"
            margin="normal"
            InputProps={{
              readOnly: true
            }}
          />

          <TextField
            id="standard-read-only-input"
            label="Line number"
            defaultValue="9103032018"
            margin="normal"
            InputProps={{
              readOnly: true
            }}
          />

          <TextField
            id="standard-read-only-input"
            label="Contract Duration"
            defaultValue="24 months"
            margin="normal"
            InputProps={{
              readOnly: true
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Launch1;
