import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

import Login from "../Login/Login";
import Home from "../Home/Home";

function AppRouter() {
  // You will need to use a ProtectedRoute somewhere
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/home">
          <Home />
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
