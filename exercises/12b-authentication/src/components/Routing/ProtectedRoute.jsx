import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AccessTokenContext } from "../../context/AccessTokenContext";

function ProtectedRoute({ children }) {
  const { hasToken } = useContext(AccessTokenContext);

  const isLoggedIn = hasToken();

  return isLoggedIn ? <Route>{children}</Route> : <Redirect to="/login" />;
}

export default ProtectedRoute;
