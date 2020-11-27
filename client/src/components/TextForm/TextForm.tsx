import React, { FormEvent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import classes from "*.module.css";

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
    props.setUserText(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // calls the submission handler from the parent component, once again presuming I want the submission button within the form.
    props.handleSubmit();
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
      ></TextField>
      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth={true}
      >
        Check Yourself!
      </Button>
    </React.Fragment>
  );
};

export default TextForm;
