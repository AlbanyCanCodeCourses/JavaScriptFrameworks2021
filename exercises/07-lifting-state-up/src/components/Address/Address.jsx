import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const defaultFormValues = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    postalCode: "",
    country: "",
  };

  const [displayResults, setDisplayResults] = useState(false);


  const handleForm = (e) =>{
    console.log('hello')
    e.preventDefault();
    setDisplayResults(true);
  
  }

 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [yourState, setYourState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
<<<<<<< HEAD
   */ 

=======
   */
  const [formValues, setFormValues] = useState(defaultFormValues);
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
  /**
   * You will need to pass props to <AddressResults /> and <AddressForm /> 
   */
<<<<<<< HEAD
  return <>{displayResults ? <AddressResults firstName={firstName} lastName = {lastName} address = {address} city ={city} yourState = {yourState} zipCode = {zipCode} country = {country}/> : <AddressForm handleForm={handleForm} setFirstName = {setFirstName} setLastName = {setLastName} setAddress = {setAddress} setCity = {setCity} setYourState = {setYourState} setZipCode = {setZipCode} setCountry = {setCountry} firstName = {firstName} lastName = {lastName} address = {address} city = {city} yourState = {yourState} zipCode = {zipCode} country = {country} />}</>;
=======
  return (
    <>
      {displayResults ? (
        <AddressResults values={formValues} />
      ) : (
        <AddressForm
          values={formValues}
          setValues={setFormValues}
          setDisplayResults={setDisplayResults}
        />
      )}
    </>
  );
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
}

export default App;
