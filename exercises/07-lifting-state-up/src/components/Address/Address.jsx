import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {displayResults ? (
        <AddressResults values={values} />
      ) : (
        <AddressForm
          setDisplayResults={setDisplayResults}
          values={values}
          handleChange={handleChange}
        />
      )}
    </>
  );
}

export default App;
