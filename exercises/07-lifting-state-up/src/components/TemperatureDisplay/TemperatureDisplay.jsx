import PropTypes from "prop-types";

const TemperatureDisplay = ({temp, scale}) => {
  
  return (
    <>
      <div className="h4">Current Temperature:</div>
      <div className="h1">
        {temp} &deg; {scale}
      </div>
    </>
  );
  
}

TemperatureDisplay.propTypes = {
  temp: PropTypes.number.isRequired,
  scale: PropTypes.string.isRequired,
};

export default TemperatureDisplay;
