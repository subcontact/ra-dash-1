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
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

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

  const Accounts = props => <Link to="/Accounts" {...props} />;
  const Sales = props => <Link to="/Sales" {...props} />;
  const Subscriptions = props => <Link to="/Subscriptions" {...props} />;
  const Quote = props => <Link to="/Quote" {...props} />;

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
              CRM Dashboard
            </Typography>
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
                    image="https://www.incimages.com/uploaded_files/image/970x450/getty_539953664_213316.jpg"
                    title="Add a new Line"
                  />
                </cardGrid>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sales
                  </Typography>
                  <Typography>Activate new service.</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" component={Sales}>
                    New Sale
                  </Button>
                  <Button size="small" color="primary" component={Quote}>
                    Offers
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Add a new Service */}
            <Grid item key={2} sm={2} md={4} lg={3}>
              <Card className={classes.card}>
                <cardGrid>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.depositaccounts.com/content/photos/concepts/rate-summary/940x470.jpg"
                    title="Add a new Service"
                  />
                </cardGrid>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Accounts
                  </Typography>
                  <Typography>Access customer Accounts</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" component={Accounts}>
                    Start
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Add a new Device */}
            <Grid item key={3} sm={2} md={4} lg={3}>
              <Card className={classes.card}>
                <cardGrid>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnqoH9_wd0QCWitWqf2yT-ITrrqFlS8clTTTz0P9SmzVjv23P"
                    title="Customers"
                  />
                </cardGrid>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Customers
                  </Typography>
                  <Typography>Follow the steps to get a new Device</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" component={Accounts}>
                    Start
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Add a new SIM Card */}
            <Grid item key={4} sm={2} md={4} lg={3}>
              <Card className={classes.card}>
                <cardGrid>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.operationsinc.com/wp-content/uploads/2018/02/HR-Audit-cropped.jpg"
                    title="Individuals"
                  />
                </cardGrid>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Individuals
                  </Typography>
                  <Typography>
                    Follow the steps to get a new SIM Card
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={Subscriptions}
                  >
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
