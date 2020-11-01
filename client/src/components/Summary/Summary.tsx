import React from "react";
import styles from "./Summary.module.css";

const Summary = (props: any) => (
  <div className={styles.Summary}>{props.text}</div>
);

export default Summary;
