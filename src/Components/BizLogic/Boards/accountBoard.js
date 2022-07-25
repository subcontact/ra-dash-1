import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Party from "../Party/mainParty";

import { Link } from "react-router-dom";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

function MainPage(props) {
  const { classes } = props;

  const MyLink = props => <Link to="/MyListEdit" {...props} />;
  const MyList = props => <Link to="/MyListShow" {...props} />;

  return (
    // Main Section
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Sales Section */}

        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Accounts Dashboard
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            />
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary" component={MyLink}>
                    Sales
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" component={MyList}>
                    Individuals
                  </Button>
                </Grid>
                <Grid item />
              </Grid>
            </div>
          </div>
        </div>

        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* Main grid */}
          <Grid container spacing={40}>
            {/* Add New Line */}
            <Grid item key={1} sm={2} md={4} lg={3}>
              <Card className={classes.card}>
                <cardGrid>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.claroservice.com/wp-content/uploads/2017/01/claro-technology_offer-min-1024x1024.jpg"
                    title="Add a new Line"
                  />
                </cardGrid>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Customer Account
                  </Typography>
                  <Typography>Activate new service.</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Browse Accounts
                  </Button>
                  <Button size="small" color="primary">
                    Start
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Add a new Service */}
            <Grid item key={1} sm={2} md={4} lg={3}>
              <Card className={classes.card}>
                <cardGrid>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://uploads.codesandbox.io/uploads/user/f1644fc7-5e84-45c1-bbd1-33ea2af2d350/5IWQ-ActivateRemoveAddServices.png"
                    title="Add a new Service"
                  />
                </cardGrid>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Subscriptions
                  </Typography>
                  <Typography>Review Subscriptions</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Browse Subscriptions
                  </Button>
                  <Button size="small" color="primary">
                    Start
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Add a new Device */}
            <Grid item key={2} sm={2} md={4} lg={3}>
              <Card className={classes.card}>
                <cardGrid>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.larepublica.net/storage/images/2018/05/31/201805310826060.claro-carolina-sanchez1.jpg"
                    title="Add Device"
                  />
                </cardGrid>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Billing
                  </Typography>
                  <Typography>Follow the steps to get a new Device</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Accounts
                  </Button>
                  <Button size="small" color="primary">
                    Start
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Add a new SIM Card */}
            <Grid item key={3} sm={2} md={4} lg={3}>
              <Card className={classes.card}>
                <cardGrid>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://aithority.com/wp-content/uploads/2018/01/claroservice.jpg"
                    title="Add SIM Card"
                  />
                </cardGrid>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Services
                  </Typography>
                  <Typography>Review Services</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    My Services
                  </Button>
                  <Button size="small" color="primary">
                    Start
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Powered by Beesion
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          CRM V11
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainPage);
