import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Category from "../Category/CategoryContainer";
import CompleteVoting from "../CompleteVoting/CompleteVoting";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/complete">
          <CompleteVoting />
        </Route>
        <Route path="/category/:id/">
          <Category />
        </Route>
        <Redirect to="/category/1/" />
      </Switch>
    </Router>
  );
}

export default App;
