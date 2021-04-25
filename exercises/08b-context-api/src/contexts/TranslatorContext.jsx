import { createContext, useState } from "react";

export const TranslatorContext = createContext();

const TranslatorProvider = ({ children }) => {

  const [language, setLanguage] = useState('en');

  return (
    <TranslatorContext.Provider value={{language, setLanguage}}>
      {children}
    </TranslatorContext.Provider>
  )

}

export default TranslatorProvider;