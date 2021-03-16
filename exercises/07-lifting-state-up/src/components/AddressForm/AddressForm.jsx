import "./AddressForm.css";
import PropTypes from "prop-types";

import countries from "../../assets/countries";
import states from "../../assets/states";

/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - setDisplayResults()
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 * - a callback function(s) for setting first name, last name, etc.
 */
function AddressForm({setDisplayResults, form, setForm}) {
  /**
   * You will need to:
   * - Set the value of each <input> / <select> to something from props
   * - Use callback function(s) in props to update <App>'s state
   * - Add an event handler to handle form submission
*/
  const handleSubmit = (e) => {
    console.log(form);
    setDisplayResults(true);
    e.preventDefault();
  }
  return (
    <form className="container mt-4" onSubmit={(e) => handleSubmit(e)}>
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
            setForm({ ...form, firstName: e.target.value });
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
            setForm({ ...form, lastName: e.target.value });
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
            setForm({ ...form, address: e.target.value });
          }}
        />
        <p className="help-block text-muted">
          Street address, P.O. box, company name, c/o
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
            setForm({ ...form, city: e.target.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select
          id="state"
          name="state"
          className="form-control"
          onChange={(e) => {
            setForm({ ...form, state: e.target.value });
          }}
        >
          <option></option>
          {states.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
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
            setForm({ ...form, zipCode: e.target.value });
          }}
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
          onChange={(e) => {
            setForm({ ...form, country: e.target.value });
          }}
        >
          <option></option>
          {countries.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

AddressForm.propTypes = {
  setDisplayResults: PropTypes.func.isRequired,
  // And others that you will need to pass in
};

export default AddressForm;
