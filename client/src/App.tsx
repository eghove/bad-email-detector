import React from "react";
import "./App.css";
// import components
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import BusinessLogic from "./components/BusinessLogic/BusinessLogic";
function App() {
  return (
    <div className="App">
      <Header title="Check Yourself" />
      <Summary text="This is an app" />
      <BusinessLogic />
    </div>
  );
}

export default App;
