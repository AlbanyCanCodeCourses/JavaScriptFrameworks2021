import { useState } from "react";
import PropTypes from "prop-types";

const LessText = ({ text = "", maxLength }) => {
  const [hidden, setHidden] = useState(false);
  return (
    <div>
      <p>{!hidden ? text.substr(0, maxLength).trim() : text}</p>
      <div>
        <button
          type="button"
          className="btn btn-dark mr-2"
          onClick={() => setHidden(true)}
        >
          Read More
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setHidden(false)}
        >
          Read Less
        </button>
      </div>
    </div>
  );
};

LessText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default LessText;
