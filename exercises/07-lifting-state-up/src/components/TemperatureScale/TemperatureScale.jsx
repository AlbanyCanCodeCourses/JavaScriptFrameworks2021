import PropTypes from "prop-types";

function TemperatureScale(props) {
<<<<<<< HEAD
  // Complete me
  return <>  </>;
=======
  return <>
            <div
          className="btn-group"
          role="group"
          aria-label="Convert temperature"
        >
          <button
            className="btn btn-outline-primary"
            onClick={() => props.setScale("F")}
          >
            Fahrenheit
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => props.setScale("C")}
          >
            Celsius
          </button>
        </div>
  </>;
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
}

TemperatureScale.propTypes = {
  setScale: PropTypes.func.isRequired,
};

export default TemperatureScale;
 