// You will need to import additional things from React
import { createContext } from "react";

export const AccessTokenContext = createContext();

export function AccessTokenProvider({ children }) {
  /**
   * Store the JWT token inside of here
   */

  /**
   * Completely change me.
   * Right now, I just setup so that my children will render.
   */
  return <>{children}</>;
}
