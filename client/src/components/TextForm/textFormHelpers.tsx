import ApiCallStates from "../../sharedVariables/ApiCallStates";
// evaluates whether to disable while call in progress
export const disabledWhileCallInProgress = (value1: string, value2: string) => {
  if (
    value1 === ApiCallStates.inProgress ||
    value2 === ApiCallStates.inProgress
  ) {
    return true;
  } else return false;
};

// button should be disabled if call in progress OR user entry empty.
export const disableButton = (
  apiCallState1: string,
  apiCallState2: string,
  userTextEmpty: boolean
) => {
  if (
    disabledWhileCallInProgress(apiCallState1, apiCallState2) ||
    userTextEmpty === true
  ) {
    return true;
  } else return false;
};
