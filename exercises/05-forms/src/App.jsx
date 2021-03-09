import { useState } from "react";
import "./App.css";
import countries from "./assets/countries.json";
import states from "./assets/states.json";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [displayInfo, setDisplayInfo] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayInfo(true);
  };

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
          value={values.firstName}
          onChange={handleChange}
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
          value={values.lastName}
          onChange={handleChange}
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
          value={values.addressLine1}
          onChange={handleChange}
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
          value={values.city}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select
          id="state"
          name="state"
          className="form-control"
          value={values.state}
          onChange={handleChange}
        >
          <option value="" disabled={true}>
            select a state
          </option>
          {states.map((state, index) => {
            return (
              <option key={"state-" + index} value={state}>
                {state}
              </option>
            );
          })}
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
          value={values.postalCode}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select
          id="country"
          name="country"
          className="form-control"
          value={values.country}
          onChange={handleChange}
        >
          <option value="" disabled={true}>
            select a country
          </option>
          {countries.map((country, index) => {
            return (
              <option key={"country-" + index} value={country}>
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
      {displayInfo && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here */}
            <li>First Name: {values.firstName}</li>
            <li>Last Name: {values.lastName}</li>
            <li>Address: {values.addressLine1}</li>
            <li>City / Town: {values.city}</li>
            <li>State / Province / Region: {values.state}</li>
            <li>Zip / Postal Code: {values.postalCode}</li>
            <li>Country: {values.country}</li>
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
