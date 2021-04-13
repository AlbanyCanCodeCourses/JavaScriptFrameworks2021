import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
// Import ProtectedRouter

import Login from "../Login/Login";
import Home from "../Home/Home";

function AppRouter() {
  // You will need to use a ProtectedRoute somewhere
  return (
    <Router>
      <Switch>
      <ProtectedRoute exact path = "/home">
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
