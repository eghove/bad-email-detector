import React from "react";
import "./App.css";
// import components
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import BusinessLogic from "./components/BusinessLogic/BusinessLogic";
function App() {
  return (
    <div className="App">
      <Header text="Welcome to the Check Yourself App!" />
      <Summary text="This is an app" />
      <BusinessLogic />
    </div>
  );
}

export default App;
