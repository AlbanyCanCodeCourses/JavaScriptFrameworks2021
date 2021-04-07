import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Import ProtectedRouter

import Login from "../Login/Login";
import Home from "../Home/Home";

function AppRouter() {
  // You will need to use a ProtectedRoute somewhere
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        {/* If no matches, redirect to home page */}
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
