import React, { FormEvent, useState } from "react";
import styles from "./BusinessLogic.module.css";
// importing utilities
import api from "../../utils/api";
// importing components
import TextForm from "../TextForm/TextForm";
import SentimentDisplay from "../SentimentDisplay/SentimentDisplay";
import ModeratorDisplay from "../ModeratorDisplay/ModeratorDisplay";
// import types
import { moderatorClassification } from "../../types/ModeratorTypes";

// helper variables
const initModeratorScores: moderatorClassification = {
  ExplicitAdult: {},
  ProfaneOffensive: {},
  ReviewRecommended: false,
  SuggestiveMature: {},
};

// this is going to holder that actual interactive behavior. This is the component that will hold state used for submission to and reporting from the api.
const BusinessLogic = (props: any) => {
  const [userText, setUserText] = useState("");
  // customError state
  const [customError, setCustomError] = useState("");
  // moderator state
  const [moderatorClassification, setModeratorClassification] = useState(
    initModeratorScores
  );
  const [profaneTerms, setProfaneTerms] = useState([]);

  // sentiment state
  const [sentimentScore, setSentimentScore] = useState(0);
  const [sentimentError, setSentimentError] = useState([]);

  // helper function for getModeratorScores
  const getModeratorData = (userText: string) => {
    api.getModeratorScores(userText).then((results) => {
      setModeratorClassification(results.data.Classification);
      if (results.data.Terms) {
        setProfaneTerms(results.data.Terms);
      }
    });
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
    setModeratorClassification(initModeratorScores);
    setProfaneTerms([]);
  };

  // handle submit function
  const handleSubmit = (event: FormEvent) => {
    resetStates();
    getModeratorData(userText);
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

      {customError.length > 0 ? (
        <p>{customError}</p>
      ) : (
        <React.Fragment>
          <ModeratorDisplay
            moderatorClassification={moderatorClassification}
            profaneTerms={profaneTerms}
          />
          <SentimentDisplay sentimentScore={sentimentScore} />
        </React.Fragment>
      )}
    </div>
  );
};

export default BusinessLogic;
