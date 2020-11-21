import React from "react";
import styles from "./Loading.module.css";
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
    return <div>Loading</div>;
  } else return null;
};

export default Loading;
