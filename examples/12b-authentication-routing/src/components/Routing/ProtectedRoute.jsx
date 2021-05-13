import { useContext, useState, useEffect } from "react";
import { Route, Redirect, useParams } from "react-router-dom";
import { AccessTokenContext } from "../../context/AccessTokenContext";

/**
 * This will redirect the user to the login form if they haven't logged in.
 */
function ProtectedRoute({ children, ...restOfProps }) {
  /**
   * If the user is logged in, the JWT token will be stored in the Context API.
   */
  const { hasToken, refreshToken } = useContext(AccessTokenContext);
  const isLoggedIn = hasToken();

  /**
   * START OF SILENT REFRESH
   * Triggers the silent refresh.
   * When the user refreshes the page, opens a new tab,
   * or modifies the URL In the address bar,
   * everything in state, including the JWT token is lost.
   * What this does is gets a new JWT token whenever this happens.
   */
  const [isRefreshing, setIsRefreshing] = useState(!isLoggedIn);
  useEffect(() => {
    if (isRefreshing) refreshToken().then(() => setIsRefreshing(false));
  }, [isRefreshing]);
  if (isRefreshing) return <></>;
  // END OF SILENT REFRESH

  return isLoggedIn ? (
    /**
     * If the user is logged in, return the child component
     */
    <Route {...restOfProps}>{children}</Route>
  ) : (
    /**
     * If the user isn't logged in, redirect to the login form
     */
    <Redirect to="/login" />
  );
}

export default ProtectedRoute;
