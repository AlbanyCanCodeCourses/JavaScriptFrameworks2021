import { useState } from "react";
import "./App.css";
// Import data from "assets/countries.json" and "assets/states.json" here
import states from "./assets/states.json";
import countries from "./assets/countries.json";

function App() {
  /**
   * Setting and changing form values
   */
  interface Values {
    firstName?: string;
    lastName?: string;
    addressLine1?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  }
  const [values, setValues] = useState<Values>({});
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Toggling whether you what is submitted in the form
   */
  const [displayResults, setDisplayResults] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisplayResults(true);
  };

  return (
    <form className="container mt-4" method="POST" onSubmit={handleSubmit}>
      {/* You will need to handle form submission */}
      <div className="form-group">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          className="form-control"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          className="form-control"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          type="text"
          className="form-control"
          name="addressLine1"
          value={values.addressLine1}
          onChange={handleChange}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input
          id="city"
          type="text"
          className="form-control"
          name="city"
          value={values.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select
          id="state"
          className="form-control"
          name="state"
          value={values.state}
          onChange={handleChange}
        >
          <option value=""></option>
          {states.map((state, idx) => {
            return (
              <option value={state} key={`state-${idx}`}>
                {state}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          type="text"
          className="form-control"
          name="postalCode"
          value={values.postalCode}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select
          id="country"
          className="form-control"
          name="country"
          value={values.country}
          onChange={handleChange}
        >
          <option value=""></option>
          {countries.map((country, idx) => {
            return (
              <option value={country} key={`country-${idx}`}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {displayResults && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {Object.values(values).map((value, idx) => {
              return <li key={`value-${idx}`}>{value}</li>;
            })}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
