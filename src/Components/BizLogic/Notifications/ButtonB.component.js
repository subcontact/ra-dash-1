import { Button } from "@material-ui/core";
import React from "react";
import { SharedSnackbarConsumer } from "./SharedSnackbar.context";

const styles = {
  button: {
    margin: 8
  }
};

const ButtonB = () => (
  <SharedSnackbarConsumer>
    {({ openSnackbar }) => (
      <Button
        style={styles.button}
        variant="raised"
        color="secondary"
        onClick={() => openSnackbar("Button B hath been clicketh.")}
      >
        Button B
      </Button>
    )}
  </SharedSnackbarConsumer>
);

export default ButtonB;
