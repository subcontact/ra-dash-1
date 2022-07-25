import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Identity from "./Identity";
import Demographics from "./Demographics";
import InvoiceAddress from "./InvoiceAddress";
import InstallationAddress from "./InstallationAddress";
import WorkInfo from "./WorkInfo";
import AdditionalInfo from "./AdditionalInfo";
import PayMethodForm from "./PayMethodForm";
import References from "./References";

import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },

  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <br />
        <br />
        <br />
        <Paper height="240" />
        <Paper>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Tab label="Identity" />
              <Tab label="Demographics" />
              <Tab label="Invoice Address" />
              <Tab label="Installation Address" />
              <Tab label="Work Info" />
              <Tab label="Additional Info" />
              <Tab label="Payment Method" />
              <Tab label="References" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <Identity />
            </TabContainer>
          )}

          {value === 1 && (
            <TabContainer>
              <Demographics />
            </TabContainer>
          )}

          {value === 2 && (
            <TabContainer>
              <InvoiceAddress />
            </TabContainer>
          )}

          {value === 3 && (
            <TabContainer>
              <InstallationAddress />
            </TabContainer>
          )}

          {value === 4 && (
            <TabContainer>
              <WorkInfo />
            </TabContainer>
          )}

          {value === 5 && (
            <TabContainer>
              <AdditionalInfo />
            </TabContainer>
          )}

          {value === 6 && (
            <TabContainer>
              <PayMethodForm />
            </TabContainer>
          )}

          {value === 7 && (
            <TabContainer>
              <References />
            </TabContainer>
          )}
        </Paper>
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
