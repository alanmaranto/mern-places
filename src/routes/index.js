import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Users from "../views/Users";
import NewPlace from "../views/NewPlace";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/places/new" component={NewPlace} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
