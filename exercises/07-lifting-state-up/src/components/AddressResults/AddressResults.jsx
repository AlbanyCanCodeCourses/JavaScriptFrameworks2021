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
<<<<<<< HEAD
        <li>{props.firstName}</li>
        <li>{props.lastName}</li>
        <li>{props.address}</li>
        <li>{props.city}</li>
        <li>{props.yourState}</li>
        <li>{props.zipCode}</li>
        <li>{props.countryx}</li>
=======
        {Object.keys(props.values).map((key, index) => (
          <li key={index}>{`${key}: ` + props.values[key]}</li>
        ))}
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
      </ul>
    </div>
  );
}

export default AddressResults;
