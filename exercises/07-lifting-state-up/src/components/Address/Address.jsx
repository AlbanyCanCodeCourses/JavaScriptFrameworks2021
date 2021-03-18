import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  

  const [formValues, setFormValues] = useState({});
  // const handleform = (e) => {
  //   e.preventDefault();
  //   setDisplayResults(true);
  // }

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [addressLine1, setAddressLine1] = useState("")
  // const [city, setCity] = useState("")
  // const [postalCode, setPostalCode] = useState("")
  // const [country, setCountry] = useState("")
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return <>{displayResults ? <AddressResults formValues={formValues}/> : 
  <AddressForm formValues={formValues} setFormValues={setFormValues} setDisplayResults={setDisplayResults}/>}</>;
}

export default App;
