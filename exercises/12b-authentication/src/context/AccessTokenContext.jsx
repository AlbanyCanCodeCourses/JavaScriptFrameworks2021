// You will need to import additional things from React
import { createContext, useState } from "react";

export const AccessTokenContext = createContext();

export function AccessTokenProvider({ children }) {
  const [token, setToken] = useState('');

  const login = (token) =>{
    setToken(token);
  }
  function logOut(){
    setToken('');
  }
  const getToken = ()=> token;
  const hasToken =() =>{
    if(token) return true;
    else return false;
  }

  return<><AccessTokenContext.Provider
  value={{
    login,
    getToken,
    hasToken,
    logOut
  }}>
    {children}
    
    </AccessTokenContext.Provider></>
  /**
   * Store the JWT token inside of here
   */

  /**
   * Completely change me.
   * Right now, I just setup so that my children will render.
   */
 
};
