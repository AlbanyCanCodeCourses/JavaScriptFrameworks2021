// Import what you need from React
import { useState, useContext, createContext } from "react";
import "./App.css";
import translations from "./assets/translations.json";
import { useContext, createContext } from 'react';
import DisplayInfo from '../src/components/DisplayInfo'
 

const languageContext = createContext();

/**
 * Declare createContext() here.
<<<<<<< HEAD
 */ 
=======
 */
const LanguageContext = createContext(
  {
    language: "en",
    setLanguage: () => {}
  }
)
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de

function App() {
  
  /**
   * Set state here. (See useState in "CreateAccount" below.)
   */
<<<<<<< HEAD
   const [language, setLanguage] = useState("en");
   
 

  /**
   * You will need to return more than just <CreateAccount />.
   */
  return<>(
    
    <languageContext.Provider value = {{language, setLanguage}} >
     <CreateAccount />;
     </languageContext.Provider>
  
  )</>
=======
  const [language, setLanguage] = useState("en")
  const value = {language, setLanguage}
  /**
   * You will need to return more than just <CreateAccount />.
   */
  return (
    <LanguageContext.Provider value={value}>
      <CreateAccount />
    </LanguageContext.Provider>
  );
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
}

function CreateAccount() {
  /**
   * You will need to replace "useState" with something else.
   */
<<<<<<< HEAD
  const {language, setLanguage} = useContext(languageContext);
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [displayInfo, setDisplayInfo] = useState(false);

  const handleForm = (e) =>{
    e.preventDefault();
    setDisplayInfo(true)
    

  }
 
  // return(
  //   displayInfo ? setDisplayInfo(true) : console.log('it doesn"t work')
  // )
  
=======
  const { language, setLanguage }  = useContext(LanguageContext);
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de

  /**
   * @see src/assets/translations.json
   * @type {Object} this is an object of translations for a given language.
   * If "language" is "en", it will be English translations.
   * If "language" is "es", it will be Spanish translations.
   * @example
   * const t = translations["es"];
   * console.log(t);
   * // Result:
   * {
   *   "Create a New Account": "Crea una cuenta",
   *   "It’s quick and easy.": "Es rápido y fácil.",
   *    // ...
   * }
   */
  const t = translations[language];
  
  /**
   * You will not need to change anything below this line.
   */
  return (
    <div className="container pt-4 pb-4">
      <div className="d-flex justify-content-between">
        <div>
          <h1 className="h3">{t["Create a New Account"]}</h1>
          <p className="lead">{t["It’s quick and easy."]}</p>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-link btn-sm"
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          |
          <button
            type="button"
            className="btn btn-link btn-sm"
            onClick={() => setLanguage("es")}
          >
            Español
          </button>
        </div>
      </div>
      <form onSubmit={handleForm}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="firstName">{t["First Name"]}</label>
            <input
              required
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value = {firstName}
              onChange = {(e)=>{setFirstName(e.target.value)}}

            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="lastName">{t["Last Name"]}</label>
            <input
              required
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value = {lastName}
              onChange = {(e)=>setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="row gx-3 mt-3">
          <div className="col-sm-6">
            <label htmlFor="email">{t["Email"]}</label>
            <input
             required
              type="email"
              className="form-control"
              id="email"
              name="email"
              value = {email}
              onChange = {(e)=>setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row gx-3 mt-3">
          <div className="col-sm-6">
            <label htmlFor="password">{t["Password"]}</label>
            <input
              required
              type="password"
              className="form-control"
              id="password"
              name="password"
              value = {password}
              onChange = {(e)=>setPassword(e.target.value)}
            />
          </div>
        </div>
        <p className="mt-3">
          <small>
            {
              t[
                "By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time."
              ]
            }
          </small>
        </p>
        <button type="submit" className="btn btn-lg btn-success">
          {t["Sign Up"]}
        </button>
      </form>
     {displayInfo ? <DisplayInfo firstName ={firstName} lastName={lastName} email={email} password={password}/> : console.log('oops')}
    </div>
  );
  
}

export default App;
