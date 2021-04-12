// Import what you need from React here
// Import "TranslatorContext"
<<<<<<< HEAD
import { useContext, createContext } from 'react';
import {TranslatorContext} from '../../contexts/TranslatorContext'
=======
import {useContext} from "react";
import {TranslatorContext} from "../../contexts/TranslatorContext.jsx";
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de

function Languages() {
  const {language, setLanguage} = useContext(TranslatorContext);
  /**
   * You will need to add something here. This component should be similar to the "CreateAccount" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */
   const [language, setLanguage]  = useContext(TranslatorContext);

  return (
    <>
      {/**
       * Modify the button so that when it is clicked, it will change the language in state to "en". For help,
       * @see exercises/08a-context-api/src/App.jsx
       * @see solutions/08a-context-api/App.solutions.jsx
       */}
<<<<<<< HEAD
      <button type="button" className="btn btn-link btn-sm" onClick = {()=>setLanguage('en')}>
=======
      <button type="button" className="btn btn-link btn-sm" onClick={()=>setLanguage("en")}>
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
        English
      </button>
      |
      {/**
       * Modify the button so that when it is clicked, it will change the language in state to "es".
       */}
<<<<<<< HEAD
      <button type="button" className="btn btn-link btn-sm" onClick = {()=>setLanguage('es')}>
=======
      <button type="button" className="btn btn-link btn-sm" onClick={()=>setLanguage("es")}>
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
        Español
      </button>
    </>
  );
}

export default Languages;
