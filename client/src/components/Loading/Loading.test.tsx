import React from "react";
import ReactDOM from "react-dom";
import Loading from "./Loading";
import ApiCallStates from "../../sharedVariables/ApiCallStates";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Loading
      sentimentApiCallStatus={ApiCallStates.inProgress}
      moderatorApiCallStatus={ApiCallStates.inProgress}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
