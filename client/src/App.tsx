import React from "react";
import "./App.css";
// import components
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import BusinessLogic from "./components/BusinessLogic/BusinessLogic";
function App() {
  return (
    <div className="App">
      <Header title="Check Yourself!" />
      <Summary
        summaryTitle="Welcome to Check Yourself!"
        summaryText="Welcome to Check Yourself! Check Yourself! is a tool you can use to check your Tweets to see how they may come across to other people."
      />
      <BusinessLogic />
    </div>
  );
}

export default App;
