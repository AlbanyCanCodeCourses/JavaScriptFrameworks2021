import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Login from "../Login/Login";
import Home from "../Home/Home";
import { useState } from "react";


function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(); 
  // You will need to use a ProtectedRoute somewhere
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn}/>
        </Route>

        <ProtectedRoute exact path="/home" isLoggedIn={isLoggedIn}>
          <Home />
        </ProtectedRoute>

        {/* <Route exact path="/home"> */}
        {/* </Route> */}

        {/* If no matches, redirect to home page */}
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
