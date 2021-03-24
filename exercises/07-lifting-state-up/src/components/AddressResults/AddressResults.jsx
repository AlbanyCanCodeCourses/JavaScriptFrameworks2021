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
        {
          <>
            <li>{props.FName}</li>
            <li>{props.LName}</li>
            <li>{props.Address}</li>
            <li>{props.Town}</li>
            <li>{props.State}</li>
            <li>{props.Zip}</li>
            <li>{props.Country}</li>
          </>
        }
      </ul>
    </div>
  );
}

export default AddressResults;
