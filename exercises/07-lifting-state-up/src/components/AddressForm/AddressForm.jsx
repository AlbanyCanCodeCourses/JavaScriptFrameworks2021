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
 *  - city
 * - state
 * - zipcode / postal code
 * - country
 * - a callback function(s) for setting first name, last name, etc.
 */
function AddressForm(props) {
  const { setFirstName, setLastName, setAddress, setCity, setYourState, setZipCode, setCountry, handleForm} = props;
  /**
   * You will need to:
   * - Set the value of each <input> / <select> to something from props
   * - Use callback function(s) in props to update <App>'s state
   * - Add an event handler to handle form submission
   */
   const handleSubmit = (e) => {
    e.preventDefault();
    props.setDisplayResults(true)
  };

  const handleChange = (e) => {
    props.setValues((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
<<<<<<< HEAD
   
    <form className="container mt-4" onSubmit = {handleForm}>
=======
    <form className="container mt-4" onSubmit={handleSubmit}>
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label" >
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
<<<<<<< HEAD
          value = {props.firstName}
          onChange = {(e)=>(setFirstName(e.target.value))}
=======
          onChange={handleChange}
          value={props.values.firstName}
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
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
<<<<<<< HEAD
          value = {props.lastName}
          onChange = {(e)=>setLastName(e.target.value)}
=======
          onChange={handleChange}
          value={props.values.lastName}
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
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
<<<<<<< HEAD
          value = {props.address}
          onChange = {(e)=>setAddress(e.target.value)}
=======
          onChange={handleChange}
          value={props.values.addressLine1}
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
        />
        <p className="help-block text-muted">
          Street address, P.O. box, company name, c/o
        </p>
      </div>

      <div className="mb-3"> 
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
<<<<<<< HEAD
        <input id="city" name="city" type="text" className="form-control"  value = {props.city} onChange={(e)=>setCity(e.target.value)}/>
=======
        <input
          id="city"
          name="city"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={props.values.city}
        />
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
<<<<<<< HEAD
        <select id="state" name="state" className="form-control" value = {props.yourState} onChange={(e)=>setYourState(e.target.value)} >
=======
        <select
          id="state"
          name="state"
          className="form-control"
          onChange={handleChange}
          value={props.values.state}
        >
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
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
<<<<<<< HEAD
          value = {props.zipCode}
          onChange= {(e)=>setZipCode(e.target.value)}
=======
          onChange={handleChange}
          value={props.values.postalCode}
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
<<<<<<< HEAD
        <select id="country" name="country" className="form-control" value = {props.country} onChange = {(e)=>setCountry(e.target.value)}>
=======
        <select
          id="country"
          name="country"
          className="form-control"
          onChange={handleChange}
          value={props.values.country}
        >
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
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
