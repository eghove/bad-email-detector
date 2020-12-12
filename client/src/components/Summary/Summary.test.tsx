import React from "react";
import ReactDOM from "react-dom";
import Summary from "./Summary";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Summary summaryTitle="Test" summaryText="Test text" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
