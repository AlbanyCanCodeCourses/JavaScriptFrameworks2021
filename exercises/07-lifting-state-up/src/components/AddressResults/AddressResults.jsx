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
        <li>{props.firstName}</li>
        <li>{props.lastName}</li>
        <li>{props.address}</li>
        <li>{props.city}</li>
        <li>{props.yourState}</li>
        <li>{props.zipCode}</li>
        <li>{props.countryx}</li>
      </ul>
    </div>
  );
}

export default AddressResults;
