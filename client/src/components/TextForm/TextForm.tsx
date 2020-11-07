import React, { FormEvent, useState } from "react";
import styles from "./TextForm.module.css";

// The component where user enters text. It will live inside BusinessLogic component
const TextForm = (props: any) => {
  
  // TODO: figure out the correct type to use for handleChange.
  const handleChange = (event: any) => {
    // passes the entered text up to the parent level component for state management
    props.setUserText(event.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // calls the submission handler from the parent component, once again presuming I want the submission button within the form.
    props.handleSubmit();
  }

  return (
    <div className={styles.TextForm}>
      <form onSubmit={handleSubmit}>
        <textarea 
          defaultValue = "Enter your text here" 
          onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default TextForm;
