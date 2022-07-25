import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import MainPartyInfo from "./mainPartyInfo";
import Avatar from "./avatar";
import PartyForm from "./partyForm";
import PartyExpPanel from "./partyExpPanel";
import Autocomplete from "./autocomplete";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginRight: 60
  },
  div: {
    //marginLeft: -600,
    width: "100%",
    display: "flex"
  },
  subDiv: {
    marginLeft: 40,
    display: "flex"
  },
  iconDiv: {
    display: "flex",
    margin: theme.spacing.unit * 1,
    marginLeft: "auto"
  }
});

class mainParty extends React.Component {
  state = {
    open: true
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.div}>
        <main className={classes.content}>
          <div className={classes.div}>
            <Typography className={classes.chartContainer}>
              <MainPartyInfo />
            </Typography>
            <div className={classes.div}>
              <PartyExpPanel />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

mainParty.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(mainParty);
