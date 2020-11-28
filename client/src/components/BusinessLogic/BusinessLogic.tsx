import React, { FormEvent, useState } from "react";
import styles from "./BusinessLogic.module.css";
// importing utilities
import api from "../../utils/api";
// importing material ui components
import Grid from "@material-ui/core/Grid";
// importing child components
import TextForm from "../TextForm/TextForm";
import SentimentDisplay from "../SentimentDisplay/SentimentDisplay";
import ModeratorDisplay from "../ModeratorDisplay/ModeratorDisplay";
import Loading from "../Loading/Loading";
// import outside variables
import ApiCallStates from "../../sharedVariables/ApiCallStates";
import { initModeratorScores } from "./helperVariables";
import { Typography } from "@material-ui/core";

// this is going to holder that actual interactive behavior. This is the component that will hold state used for submission to and reporting from the api.
const BusinessLogic = (props: any) => {
  const [userText, setUserText] = useState("");
  const [sentimentApiCallStatus, setSentimentApiCallStatus] = useState(
    ApiCallStates.initial
  );
  const [moderatorApiCallStatus, setModeratorApiCallStatus] = useState(
    ApiCallStates.initial
  );
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
  const getModeratorData = async (userText: string) => {
    setModeratorApiCallStatus(ApiCallStates.inProgress);
    let results = await api.getModeratorScores(userText);
    setModeratorClassification(results.data.Classification);
    if (results.data.Terms) {
      setProfaneTerms(results.data.Terms);
    }
    setModeratorApiCallStatus(ApiCallStates.complete);
  };

  // helper function for getSentimentScores
  const getSentimentData = async (userText: string) => {
    setSentimentApiCallStatus(ApiCallStates.inProgress);
    let results = await api.getSentimentScore(userText);
    if (results.data.customError) {
      setCustomError(results.data.customError);
    } else {
      setSentimentScore(results.data.score);
      setSentimentError(results.data.errors);
    }
    setSentimentApiCallStatus(ApiCallStates.complete);
  };

  // handles resetting states on each new submit
  const resetStates = () => {
    setSentimentApiCallStatus(ApiCallStates.initial);
    setModeratorApiCallStatus(ApiCallStates.complete);
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

  const isUserTextEmpty = (value: string) => {
    if (value.length === 0) {
      return true;
    } else return false;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextForm
          setUserText={setUserText}
          handleSubmit={handleSubmit}
          sentimentApiCallStatus={sentimentApiCallStatus}
          moderatorApiCallStatus={moderatorApiCallStatus}
          userTextEmpty={isUserTextEmpty(userText)}
        />
      </Grid>
      <Grid item xs={6}>
        {/* If BOTH requests are complete, render the fragment that displays customError if one exists, or the fragment that renders ModeratorDisplay or SentimentDisplay
      ELSE render the Loading component */}
        {sentimentApiCallStatus === ApiCallStates.complete &&
        moderatorApiCallStatus === ApiCallStates.complete ? (
          <React.Fragment>
            {customError.length > 0 ? (
              <p>{customError}</p>
            ) : (
              <React.Fragment>
                <Typography variant="h6" gutterBottom align="center">
                  Results
                </Typography>
                <SentimentDisplay sentimentScore={sentimentScore} />
                <ModeratorDisplay
                  moderatorClassification={moderatorClassification}
                  profaneTerms={profaneTerms}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        ) : (
          <Loading
            sentimentApiCallStatus={sentimentApiCallStatus}
            moderatorApiCallStatus={moderatorApiCallStatus}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default BusinessLogic;
