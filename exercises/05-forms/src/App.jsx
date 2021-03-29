import { useState } from "react";
import "./App.css";
import states from "./assets/states.json"
import countries from "./assets/countries.json"// Import data from "assets/countries.json" and "assets/states.json" here

function App() {
  const[submit, setSubmit] = useState(false);
  const[state, setState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: ""

  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const submit = (e) => {
    e.preventDefault()
  };
  
  return (
    <form className="container mt-4" method="POST" onSubmit={submit}>
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
          value={state.firstName}
          onChange = {handleChange}
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
          value={state.lastName}
          onChange = {handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="address"
          type="text"
          className="form-control"
          value={state.address}
          onChange = {handleChange}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" 
        value={state.city}
        onChange = {handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        
        <select id="state" name="state" className="form-control" value={state.state}
          onChange = {handleChange}>{states.map((x) => {
          return(
            <option value={x}>{x}</option>
          )})}</select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="zip"
          type="text"
          className="form-control"
          value={state.zip}
          onChange = {handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        
        <select id="country" name="country" className="form-control"value={state.country}
          onChange = {handleChange}>{countries.map((x) => {
          return(
            <option value={x}>{x}</option>
          )})}</select>
      </div>
      <button type="submit" className="btn btn-primary" onClick={() => setSubmit(true)}>
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {true && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here */}
            <li>First Name: {state.firstName}</li>
            <li>Last Name: {state.lastName}</li>
            <li>Address: {state.address}</li>
            <li>City / Town: {state.city}</li>
            <li>State: {state.state}</li>
            <li>Zip: {state.zip}</li>
            <li>Country: {state.country}</li>
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
