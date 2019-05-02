import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "APP IS TEST RENDERING! Still!"
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}