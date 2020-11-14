import React from "react";
import styles from "./ModeratorDisplay.module.css";

type ModeratorDisplayProps = {
  test: string;
};
const ModeratorDisplay = ({ test }: ModeratorDisplayProps) => (
  <div className={styles.ModeratorDisplay}>{test}</div>
);

export default ModeratorDisplay;
