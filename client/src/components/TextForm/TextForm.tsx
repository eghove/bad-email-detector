import React, { useState } from "react";
import styles from "./TextForm.module.css";

// The component where user enters text. It will live inside BusinessLogic component
const TextForm = (props: any) => {
  return (
    <div className={styles.TextForm}>
      <p>Text Form</p>
    </div>
  );
};

export default TextForm;
