import { Button } from "@material-ui/core";
import React from "react";
import { SharedSnackbarConsumer } from "./SharedSnackbar.context";

const styles = {
  button: {
    margin: 8
  }
};

const ButtonA = () => (
  <SharedSnackbarConsumer>
    {({ openSnackbar }) => (
      <Button
        style={styles.button}
        variant="raised"
        color="primary"
        onClick={() => openSnackbar("Button A hath been clicketh.")}
      >
        Button A
      </Button>
    )}
  </SharedSnackbarConsumer>
);

export default ButtonA;
