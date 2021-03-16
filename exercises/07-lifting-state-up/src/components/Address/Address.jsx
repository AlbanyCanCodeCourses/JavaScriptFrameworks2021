import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  const [form, setForm ] = useState({

  });
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return (
    <>
      {displayResults ? (
        <AddressResults form={form} />
      ) : (
        <AddressForm setDisplayResults={setDisplayResults} form={form} setForm={setForm} />
      )}
    </>
  );
}

export default App;
