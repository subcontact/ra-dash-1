import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Avatar from "./avatar";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  root: {
    width: "100%" // JM: ontrola el ancho del main expansion panel
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function MainPartyInfo(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper>
        <IconButton aria-label="Edit" color="secondary">
          <EditIcon />
        </IconButton>
        <Typography align="center">
          <Avatar />
        </Typography>
        <Typography variant="h5" gutterBottom component="h2" align="center">
          Nancy Myers
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Roles" secondary="Customer" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Segment" secondary="Retail" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Type" secondary="Individual" />
          </ListItem>
          <ListItem>
            <ListItemText primary="ID" secondary="6841365498Q" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Status" secondary="Active" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Company" secondary="Galp Portugal" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sales Rep" secondary="José Mrakovich" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Address"
              secondary="Anabel Segura 15
          Alcobendas | 28100
          Madrid | España"
            />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

MainPartyInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainPartyInfo);
