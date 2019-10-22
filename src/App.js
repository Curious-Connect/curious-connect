import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home';
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/> 
    </div>
  );
}

export default App;
