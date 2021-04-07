import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../Login/Login";
import Home from "../Home/Home";

function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* The ProtectedRoute will redirect the user to the login form if they haven't logged in. */}
        <ProtectedRoute exact path="/home">
          <Home />
        </ProtectedRoute>

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
