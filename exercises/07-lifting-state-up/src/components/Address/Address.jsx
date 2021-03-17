import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
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
   */ 

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return <>{displayResults ? <AddressResults firstName={firstName} lastName = {lastName} address = {address} city ={city} yourState = {yourState} zipCode = {zipCode} country = {country}/> : <AddressForm handleForm={handleForm} setFirstName = {setFirstName} setLastName = {setLastName} setAddress = {setAddress} setCity = {setCity} setYourState = {setYourState} setZipCode = {setZipCode} setCountry = {setCountry} firstName = {firstName} lastName = {lastName} address = {address} city = {city} yourState = {yourState} zipCode = {zipCode} country = {country} />}</>;
}

export default App;
