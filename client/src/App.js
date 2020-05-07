import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Rules from "./pages/Rules";
import HowToPlay from "./pages/HowToPlay";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/HowToPlay">
          <HowToPlay />
        </Route>
        <Route exact path="/Rules">
          <Rules />
        </Route>
      </Switch>
      {/* <header className="App-header"> */}
      {/* <img src="./fishbowl_logo.png" className="App-logo" alt="logo" /> */}
      {/* </header> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
