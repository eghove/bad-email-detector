import React from "react";
import styles from "./Header.module.css";

const Header = (props: any) => (
  <div className={styles.Header}>{props.text}</div>
);

export default Header;
