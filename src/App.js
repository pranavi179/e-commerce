import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "antd/dist/antd.css";

import Navbar from "./components/Navbar";
import View from "./components/view";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={View} />
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
