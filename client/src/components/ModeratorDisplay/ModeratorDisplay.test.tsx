import React from "react";
import ReactDOM from "react-dom";
import ModeratorDisplay from "./ModeratorDisplay";
import { initModeratorScores } from "../BusinessLogic/helperVariables";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ModeratorDisplay
      moderatorClassification={initModeratorScores}
      profaneTerms={[{ Index: 0, ListId: 0, OriginalIndex: 0, Term: "damn" }]}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
