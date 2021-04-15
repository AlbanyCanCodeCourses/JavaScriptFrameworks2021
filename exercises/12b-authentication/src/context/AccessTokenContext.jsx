// You will need to import additional things from React
import { createContext, useState } from "react";

export const AccessTokenContext = createContext();

export function AccessTokenProvider({ children }) {
  /**
   * Store the JWT token inside of here
   */
  const [token, setToken] = useState("");
  const isLoggedIn = () => !!token;
  const login = (token) => setToken(token);
  const logout = () => setToken("");

  /**
   * Completely change me.
   * Right now, I just setup so that my children will render.
   */
  return (
    <AccessTokenContext.Provider value={{token, isLoggedIn, login, logout}}>
      {children}
    </AccessTokenContext.Provider>
  );
}
