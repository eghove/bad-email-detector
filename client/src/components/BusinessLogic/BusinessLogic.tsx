import React, { FormEvent, useState } from "react";
import styles from "./BusinessLogic.module.css";
// importing components
import TextForm from "../TextForm/TextForm";
// importing utilities
import api from "../../utils/api";

// this is going to holder that actual interactive behavior. This is the component that will hold state used for submission to and reporting from the api.
const BusinessLogic = (props: any) => {
  // api.testGetModeratorScore();
  // api.testGetSentimentScore();
  const [userText, setUserText] = useState("");
  const [moderatorScores, setModeratorScores] = useState();
  const [sentimentScores, setSentimentScores] = useState();

  // helper function for getModeratorScores
  const getModeratorScores = (userText:string) => {
    api.getModeratorScores(userText).then(results => console.log(results));
  }

  const getSentimentScores = (userText:string) => {
    api.getSentimentScore(userText).then(results => console.log(results));
  }
  
  const handleSubmit = (event: FormEvent) => {
    getModeratorScores(userText);
    getSentimentScores(userText);
  }

  

  return (
    <div className={styles.BusinessLogic}>
      <p>{userText}</p>
      <TextForm
        setUserText = {setUserText}
        // presumes I want to handle the submission within the TextForm
        handleSubmit = {handleSubmit} >
      </TextForm>
    </div>
  );
};

export default BusinessLogic;
