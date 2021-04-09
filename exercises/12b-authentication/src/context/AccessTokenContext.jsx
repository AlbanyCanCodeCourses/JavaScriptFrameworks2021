// You will need to import additional things from React
import { createContext } from "react";
import { useState } from "react";

export const AccessTokenContext = createContext();

export function AccessTokenProvider({ children }) {
  /**
   * Store the JWT token inside of here
   */
  const [token, setToken] = useState();
  

  const logout = () => {
    setToken(null);
  }

  /**
   * Completely change me.
   * Right now, I just setup so that my children will render.
   */
  return <AccessTokenContext.Provider value={{token, setToken, logout}}>{children}</AccessTokenContext.Provider>;
}
