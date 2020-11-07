import React, { useState } from "react";
import styles from "./BusinessLogic.module.css";
// importing components
import TextForm from "../TextForm/TextForm";
// importing utilities
import api from "../../utils/api";

// this is going to holder that actual interactive behavior. This is the component that will hold state used for submission to and reporting from the api.
const BusinessLogic = (props: any) => {
  // api.testGetModeratorScore();
  // api.testGetSentimentScore();
  const [userText, setUserText] = useState("Put your text here");
  return (
    <div className={styles.BusinessLogic}>
      <p>{userText}</p>
      <TextForm />
      <button onClick={() => setUserText("new text")}>-</button>
    </div>
  );
};

export default BusinessLogic;
