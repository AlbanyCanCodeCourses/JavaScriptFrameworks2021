import { createContext, useState, useEffect } from "react";
import { createCountdown, clearCountdown } from "../utils/refreshCountdown";
import axios from "axios";

export const AccessTokenContext = createContext();

export function AccessTokenProvider({ children }) {
  /**
   * Storing the JWT token in the Context API
   */
  const [token, setToken] = useState("");
  /**
   * After 15 minutes, the JWT token expires.
   * This is for getting a new token before the older token expires.
   */
  const [expiry, setExpiry] = useState();

  /**
   * @returns JWT token. Use to determine if the user is logged in.
   */
  const getToken = () => token;
  /**
   *
   * @returns {boolean} whether or not the token is stored in the Context API.
   * In other words, whether or not the user is logged in.
   */
  const hasToken = () => !!token;

  /**
   * We login by setting the token.
   * The expiry is needed to start the countdown until we refresh the token.
   * @param {string} token
   * @param {number} expiry timestamp
   */
  const login = (token, expiry) => {
    setToken(token);
    setExpiry(expiry);
  };
  /**
   * Logs the user out by sending a request to the server
   * and deleting the token.
   */
  const logout = () => {
    return axios
      .request({
        method: "DELETE",
        url: "/api/logout",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .catch((error) => console.log(error))
      .then(() => {
        /**
         * We logout on the client by deleting the token
         * and we reset the expiry to stop the countdown
         * to get a refresh token.
         */
        setToken("");
        setExpiry();
      });
  };

  /**
   * What this HTTP call does is get a new JWT token if the user is logged in.
   * The server will know whether or not the user is logged in.
   */
  const refreshToken = () => {
    return axios
      .request({
        method: "GET",
        url: "/api/refresh",
      })
      .then((response) => {
        /**
         * If the user is logged in on the server, we will get a token
         * and set it in state.
         */
        const { token, expiry } = response.data;
        setToken(token);
        setExpiry(expiry);
      })
      .catch((error) => {
        console.error(error);
        /**
         * If the response returns an HTTP status of 401 in this case, that means that the token has expired or is invalid.
         * When this happens, I am redirecting to the login form.
         */
        if (error.response && error.response.status === 401) {
          logout();
        } else throw Error(error);
      });
  };
  /**
   * Starting the countdown to refresh the JWT token
   */
  useEffect(() => {
    if (expiry) createCountdown(expiry, refreshToken);
    return clearCountdown;
  }, [expiry]);

  return (
    <AccessTokenContext.Provider
      value={{
        getToken,
        hasToken,
        login,
        logout,
        refreshToken,
      }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
}
