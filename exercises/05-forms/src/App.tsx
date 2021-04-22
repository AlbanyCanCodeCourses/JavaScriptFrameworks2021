import { useState } from "react";
import "./App.css";
import states from "./assets/states.json"
import countries from "./assets/countries.json"


// Import data from "assets/countries.json" and "assets/states.json" here

function App() {

  interface IFormValues {
    firstName: string,
    lastName: string,
    addressLine1: string,
    city: string,
    state: string,
    postalCode: number,
    country: string
  }
  const [formValues, setFormValues] = useState({});
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleSubmit = (event: | React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowUserDetails(!showUserDetails);
  }

  const handleInput = (name: string, value: string | number) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
    console.log(formValues)
  }
  return (
    <form className="container mt-4" method="POST" onSubmit={handleSubmit}>
      {/* You will need to handle form submission */}
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          onChange={event => handleInput(event.target.name, event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          onChange={event => handleInput(event.target.name, event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          onChange={event => handleInput(event.target.name, event.target.value)}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className="form-control"
          onChange={event => handleInput(event.target.name, event.target.value)}
          />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select id="state" name="state" className="form-control" onChange={event => handleInput(event.target.name, event.target.value)}>
          <option disabled selected>Select a state...</option>
          {states.map((state, index) => <option key={state.toLowerCase()}>{state}</option>)}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          onChange={event => handleInput(event.target.name, event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select id="country" name="country" className="form-control"onChange={event => handleInput(event.target.name, event.target.value)}>
          <option disabled selected>Select a country...</option>
          {countries.map((country, index) => <option key={country.toLowerCase()}>{country}</option>)}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {showUserDetails && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {Object.entries(formValues).map(field => field[1] && <li key={field[0]}>{`${field[0]}: ${field[1]}`}</li>)}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
