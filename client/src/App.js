import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <header className="App-header"> */}
      <img src="./fishbowl_logo.png" className="App-logo" alt="logo" />
      {/* </header> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
