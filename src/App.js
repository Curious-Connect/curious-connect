import React, { Component, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";

import { Route } from "react-router-dom";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/privacy" component={Privacy} />
    </div>
  );
}

function initializeReactGA() {
  ReactGA.initialize("UA-148064387-1");
  ReactGA.pageview("/homepage");
}

export default App;
