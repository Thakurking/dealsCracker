import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Router>
      <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Router>
    </>
  );
}

export default App;
