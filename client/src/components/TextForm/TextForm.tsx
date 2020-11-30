import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
// import the helper functions for TextForm
import { disabledWhileCallInProgress, disableButton } from "./textFormHelpers";

const useStyles = makeStyles((theme) => ({
  textField: {},
  submitButton: {
    marginTop: theme.spacing(3),
  },
}));

// The component where user enters text. It will live inside BusinessLogic component
// TODO: Figure out how to handle props without 'any' type.
const TextForm = (props: any) => {
  // TODO: figure out the correct type to use for handleChange.
  const handleChange = (event: any) => {
    // passes the entered text up to the parent level component for state management
    props.handleChange(event.target.value);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        Enter your Tweet here!
      </Typography>
      <TextField
        className={classes.textField}
        id="submissionText"
        name="submissionText"
        label="Enter your Tweet here"
        multiline
        rowsMax={4}
        fullWidth
        variant="outlined"
        onChange={handleChange}
        disabled={disabledWhileCallInProgress(
          props.sentimentApiCallStatus,
          props.moderatorApiCallStatus
        )}
      ></TextField>
      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        onClick={props.handleSubmit}
        fullWidth={true}
        disabled={disableButton(
          props.sentimentApiCallStatus,
          props.moderatorApiCallStatus,
          props.userTextEmpty
        )}
      >
        Check Yourself!
      </Button>
    </React.Fragment>
  );
};

export default TextForm;
