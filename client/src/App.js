import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";

function App() {
  return (
    <>
      <Router>
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
