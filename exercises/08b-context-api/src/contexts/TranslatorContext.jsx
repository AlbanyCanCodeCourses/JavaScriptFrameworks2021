import { createContext, useState } from "react";

/**
 * I'm initializing the Context API here.
 * Every component that either sets or gets something from the Context API will need to import this.
 */
export const TranslatorContext = createContext();

const TranslatorProvider = ({ children }) => {

  const [language, setLanguage] = useState('en');
  /**
   * Complete me. This component should be similar to the "App" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */
  return (
    <TranslatorContext.Provider value={{language, setLanguage}}>
      {children}
    </TranslatorContext.Provider>
  )

}

export default TranslatorProvider;