import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { withStyles } from "@material-ui/core/styles";

const variantIcon = {
  success: () => <Avatar>S</Avatar>,
  warning: () => <Avatar>W</Avatar>,
  error: () => <Avatar>E</Avatar>,
  info: () => <Avatar>I</Avatar>
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          {message}
        </span>
      }
      action={[
        <Button
          key="close"
          aria-label="Close"
          color="secondary"
          className={classes.close}
          onClick={onClose}
        >
          <Avatar>?</Avatar>
        </Button>
      ]}
      headlineMapping={{
        body1: "div",
        body2: "div"
      }}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

class CustomizedSnackbars extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button className={classes.margin} onClick={this.handleClick}>
          Open success snackbar
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: "left",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={8000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="error"
            message="This is a success message!"
          />
        </Snackbar>
      </div>
    );
  }
}

CustomizedSnackbars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles2)(CustomizedSnackbars);
