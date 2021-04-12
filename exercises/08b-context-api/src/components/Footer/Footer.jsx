// Import what you need from React
import {useContext, createContext} from 'react';
import Languages from "../Languages/Languages";
import translations from "./FooterTranslations.json";
<<<<<<< HEAD
import {TranslatorContext} from '../../contexts/TranslatorContext'
=======
import { useContext } from "react"
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
// Import "TranslatorContext"
import {TranslatorContext} from "../../contexts/TranslatorContext.jsx";

function Footer() {
  const {language} = useContext(TranslatorContext);
  /**
   * You will need to add something here. This component should be similar to the "CreateAccount" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */
   const [language, setLanguage]  = useContext(TranslatorContext);
  /**
   * Replace "en" with a constant or variable.
   */
  const t = translations[language];

  /**
   * You do not have to change anything below this line.
   */
  return (
    <div className="bg-light text-center pt-2 pb-2">
      <div>
        <small>
          {t["No One"]} &copy; {new Date().getFullYear()}
        </small>
      </div>
      <div>
        <small>
          <Languages />
        </small>
      </div>
    </div>
  );
}

export default Footer;
