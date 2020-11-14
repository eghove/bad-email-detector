import React from "react";
import ReactDOM from "react-dom";
import SentimentDisplay from "./SentimentDisplay";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SentimentDisplay sentimentScore={0.5} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
