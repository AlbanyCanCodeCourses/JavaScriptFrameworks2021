import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  const [formValues, setFormValues] = useState({});

  // Take a key and value, update value at key (create if doesn't exist yet)
  const updateFormValue = (key, value) => {
    const newFormValues = {
      ...formValues,
      [key]: value
    }
    setFormValues(newFormValues);
    console.log(newFormValues)
  }

  return (
    <>
      {displayResults 
        ? <AddressResults formValues={formValues}/>
        : <AddressForm setDisplayResults={() => setDisplayResults(true)} formValues={formValues} updateFormValue={updateFormValue}/>}
    </>
  );
}

export default App;
