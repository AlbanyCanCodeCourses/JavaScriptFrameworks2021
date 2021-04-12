import PropTypes from "prop-types";


function TemperatureDisplay(props) {
<<<<<<< HEAD
 
 
  return <>{ }</>;
=======
  return (   
  <>
     <div className="h4">Current Temperature:</div>
       <div className="h1">
         {props.temperature} &deg; {props.scale}
     </div>
  </>
  )
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
}

TemperatureDisplay.propTypes = {
  temperature: PropTypes.number.isRequired,
  scale: PropTypes.string.isRequired,
};

export default TemperatureDisplay;
 