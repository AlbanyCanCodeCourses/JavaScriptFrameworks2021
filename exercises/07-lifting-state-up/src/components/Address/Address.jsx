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
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */
  const [formValues, setFormValues] = useState(defaultFormValues);
  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
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
}

export default App;
