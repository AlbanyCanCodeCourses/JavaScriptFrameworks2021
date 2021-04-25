import { useState, FunctionComponent, FormEvent } from "react";
import "./App.css";
import countries from "./assets/countries.json";
import states from "./assets/states.json";
import { ListGroup } from "react-bootstrap";

interface StateProperties  {
  firstName: string | undefined;
  lastName: string | undefined;
  addressLine1: string | undefined;
  city: string | undefined;
  state: string | undefined;
  postalCode: string | undefined;
  country: string | undefined;
};

const App:FunctionComponent = () => {
  const [values, setValues]= useState<StateProperties>({
      firstName: undefined,
      lastName: undefined,
      addressLine1: undefined,
      city: undefined,
      state: undefined,
      postalCode: undefined,
      country: undefined
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }
  return (
    <>
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
            onChange={(e) => {
              setValues({
                ...values,
                firstName: e.target.value,
              });
            }}
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
            onChange={(e) => {
              setValues({
                ...values,
                lastName: e.target.value,
              });
            }}
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
            onChange={(e) => {
              setValues({
                ...values,
                addressLine1: e.target.value,
              });
            }}
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
            onChange={(e) => {
              setValues({
                ...values,
                city: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="control-label">
            State / Province / Region
          </label>
          {/* Loop through the states you imported here */}
          <select
            onChange={(e) => {
              setValues({
                ...values,
                state: e.target.value,
              });
            }}
            id="state"
            name="state"
            className="form-control"
          >
            {states.map((state, index) => {
              return (
                <option value={state} key={index}>
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
            onChange={(e) => {
              setValues({
                ...values,
                postalCode: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="control-label">
            Country
          </label>
          {/* Loop through the countries you imported here */}
          <select
            onClick={(e) => {
              setValues({
                ...values,
                country: (e.target as HTMLSelectElement).value,
              });
            }}
            id="country"
            name="country"
            className="form-control"
          >
            {countries.map((country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {/* {console.log(values)} */}

        {/*
         * Find a way to only display this once the form has been submitted.
         * Hint: You will need to change "false" below with something else
         */}
        {false && (
          <div className="card card-body bg-light mt-4 mb-4">
            Results:
            <ul className="list-unstyled mb-0">
              {/* Add <li></li> tags here */}
            </ul>
          </div>
        )}
      </form>
      <div className="container">
        <ListGroup className="formDisplay">
          {Object.entries(values).map(([key, value], index) => {
            return (
              <ListGroup.Item variant="success" key={index}>
                <h5>
                  <strong>{key}</strong>
                </h5>
                {value}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
}

export default App;