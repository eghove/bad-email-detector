import React from "react";
import styles from "./Loading.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import ApiCallStates from "../../sharedVariables/ApiCallStates";
type ApiCallStatus = {
  sentimentApiCallStatus: string;
  moderatorApiCallStatus: string;
};

const Loading = ({
  sentimentApiCallStatus,
  moderatorApiCallStatus,
}: ApiCallStatus) => {
  if (
    sentimentApiCallStatus === ApiCallStates.inProgress ||
    moderatorApiCallStatus === ApiCallStates.inProgress
  ) {
    return (
      <Grid>
        <CircularProgress color="secondary" size={100} />
      </Grid>
    );
  } else return null;
};

export default Loading;
