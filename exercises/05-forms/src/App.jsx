import { useState } from "react";
import "./App.css";
// Import data from "assets/countries.json" and "assets/states.json" here
import states from "./assets/states.json";
import countries from "./assets/countries.json";

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    region: "",
    zip: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const userData = [state];

  console.log({
    state,
    userData,
  });

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
          value={state.firstName}
          onChange={(e) =>
            setState({
              ...state,
              firstName: e.target.value,
            })
          }
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
          onChange={(e) =>
            setState({
              ...state,
              lastName: e.target.value,
            })
          }
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
          value={state.address}
          onChange={(e) =>
            setState({
              ...state,
              address: e.target.value,
            })
          }
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" />
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
          onChange={(e) =>
            setState({
              ...state,
              region: e.target.value,
            })
          }
        >
          {states.map((child, idx) => (
            <option value={child} key={idx}>
              {child}
            </option>
          ))}
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
          value={state.zip}
          onChange={(e) =>
            setState({
              ...state,
              zip: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>

        <select
          id="country"
          name="country"
          className="form-control"
          onChange={(e) =>
            setState({
              ...state,
              country: e.target.value,
            })
          }
        >
          {countries.map((child, idx) => (
            <option value={child} key={idx}>
              {child}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary" onChange={handleSubmit}>
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {!false && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here */}
            {userData.map((child, idx) => (
              <>
                <li>{child.firstName}</li>
                <li>{child.lastName}</li>
                <li>{child.address}</li>
                <li>{child.city}</li>
                <li>{child.region}</li>
                <li>{child.zip}</li>
                <li>{child.country}</li>
              </>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
