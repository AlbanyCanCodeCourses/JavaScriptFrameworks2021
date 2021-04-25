import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Login from "../Login/Login";
import Home from "../Home/Home";
import { useContext } from "react";
import {AccessTokenContext} from '../../context/AccessTokenContext';


function AppRouter() {
  const { isLoggedIn } = useContext(AccessTokenContext);

  // You will need to use a ProtectedRoute somewhere
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>

        <ProtectedRoute exact path="/home" isLoggedIn={isLoggedIn}>
          <Home />
        </ProtectedRoute>

        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
