import React, { FormEvent, useState } from "react";
import styles from "./BusinessLogic.module.css";
// importing utilities
import api from "../../utils/api";
// importing components
import TextForm from "../TextForm/TextForm";
import SentimentDisplay from "../SentimentDisplay/SentimentDisplay";
import ModeratorDisplay from "../ModeratorDisplay/ModeratorDisplay";

// this is going to holder that actual interactive behavior. This is the component that will hold state used for submission to and reporting from the api.
const BusinessLogic = (props: any) => {
  const [userText, setUserText] = useState("");
  // customError state
  const [customError, setCustomError] = useState("");
  const [moderatorScores, setModeratorScores] = useState();

  // sentiment state
  const [sentimentScore, setSentimentScore] = useState(0);
  const [sentimentError, setSentimentError] = useState([]);

  // helper function for getModeratorScores
  const getModeratorData = (userText: string) => {
    api
      .getModeratorScores(userText)
      .then((results) => setModeratorScores(results.data));
  };

  // helper function for getSentimentScores
  const getSentimentData = (userText: string) => {
    api.getSentimentScore(userText).then((results) => {
      // console.log(results.data);
      if (results.data.customError) {
        setCustomError(results.data.customError);
      } else {
        setSentimentScore(results.data.score);
        setSentimentError(results.data.errors);
      }
    });
  };

  // handles resetting states on each new submit
  const resetStates = () => {
    setCustomError("");
    setSentimentScore(0);
    setSentimentError([]);
  };

  // handle submit function
  const handleSubmit = (event: FormEvent) => {
    resetStates();
    // getModeratorData(userText);
    getSentimentData(userText);
  };

  return (
    <div className={styles.BusinessLogic}>
      <p>{userText}</p>
      <TextForm
        setUserText={setUserText}
        // presumes I want to handle the submission within the TextForm
        handleSubmit={handleSubmit}
      />
      <ModeratorDisplay test="test" />
      {customError.length > 0 ? (
        <p>{customError}</p>
      ) : (
        <SentimentDisplay sentimentScore={sentimentScore} />
      )}
    </div>
  );
};

export default BusinessLogic;
