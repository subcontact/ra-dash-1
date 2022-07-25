import React, { Component, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  CssBaseline,
  MenuList,
  MenuItem
} from "@material-ui/core";

import { fade } from "@material-ui/core/styles/colorManipulator";
import Badge from "@material-ui/core/Badge";
import InputBase from "@material-ui/core/InputBase";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import { compose } from "recompose";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShopIcon from "@material-ui/icons/Domain";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AccountIcon from "@material-ui/icons/AccountBalance";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import ShopProcIcon from "@material-ui/icons/Settings";
import PartyIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "auto"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,

    backgroundColor: "rgba(0,0,0,1)"
  },

  icon: {},

  grow: {
    flexGrow: 1
  },

  toolbar: {
    padding: "0 8px",
    paddingRight: 24, // keep right padding when drawer closed
    alignItems: "center",
    justifyContent: "flex-end"
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },

  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
});

class Layout extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, children } = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <MenuList>
          <MenuItem>
            <ListItemIcon className={classes.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="Home"
            />
          </MenuItem>
          <MenuItem>
            <ListItemIcon className={classes.icon}>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="Sales"
            />
          </MenuItem>
          <MenuItem>
            <ListItemIcon className={classes.icon}>
              <AccountIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="Accounts"
            />
          </MenuItem>
          <MenuItem>
            <ListItemIcon className={classes.icon}>
              <AccountIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="MyList"
            />
          </MenuItem>
          //INDIVIDUALS
          <MenuItem>
            <ListItemIcon className={classes.icon}>
              <PartyIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="Individuals"
            />
          </MenuItem>
          <MenuItem>
            <ListItemIcon className={classes.icon}>
              <SubscriptionIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="Subscriptions"
            />
          </MenuItem>
          <MenuItem>
            <ListItemIcon className={classes.icon}>
              <PartyIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="Parties"
            />
          </MenuItem>
          <MenuItem>
            <ListItemIcon className={classes.icon}>
              <ShopIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="New Sale"
            />
          </MenuItem>
          <MenuItem>
            <ListItemIcon className={classes.icon}>
              <ShopProcIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="New Sales Process"
            />
          </MenuItem>
        </MenuList>
      </div>
    );

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <Menu />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                CRM
              </Typography>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClick={this.handleDrawerToggle}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            />
          </Hidden>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </Fragment>
    );
  }
}

export default compose(withStyles(styles))(Layout);
