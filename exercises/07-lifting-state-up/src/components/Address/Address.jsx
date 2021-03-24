import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  console.log({
    fname,
    lname,
    address,
    town,
    state,
    zip,
    country,
  });
  return (
    <>
      {displayResults ? (
        <AddressResults
          FName={fname}
          LName={lname}
          Address={address}
          Zip={zip}
          Town={town}
          State={state}
          Country={country}
        />
      ) : (
        <AddressForm
          FName={fname}
          LName={lname}
          Address={address}
          Zip={zip}
          setFName={setFName}
          setLName={setLName}
          setAddress={setAddress}
          setZip={setZip}
          Town={town}
          setTown={setTown}
          State={state}
          setState={setState}
          Country={country}
          setCountry={setCountry}
          setDisplayResults={setDisplayResults}
        />
      )}
    </>
  );
}

export default App;
