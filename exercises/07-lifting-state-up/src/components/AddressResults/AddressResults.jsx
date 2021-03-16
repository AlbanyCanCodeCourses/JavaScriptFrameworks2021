/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults(props) {
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
        <li>First Name: {props.values.firstName}</li>
        <li>Last Name: {props.values.lastName}</li>
        <li>Address: {props.values.addressLine1}</li>
        <li>City / Town: {props.values.city}</li>
        <li>State / Province / Region: {props.values.state}</li>
        <li>Zip / Postal Code: {props.values.postalCode}</li>
        <li>Country: {props.values.country}</li>
      </ul>
    </div>
  );
}

export default AddressResults;
