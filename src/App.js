import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/index";

import "./App.css";

App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
