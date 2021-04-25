import React from 'react';
import PropTypes from 'prop-types';

const LessText = ({text, maxLength, click}) => {
    return (
      <div>
        <p>{text.substring(0, maxLength)}</p>
        <button onClick={()=>click(text.length)}>Read More</button>
        <button onClick={()=>click(25)}>Read Less</button>
      </div>
    );
}

LessText.propTypes = {
    text: PropTypes.string,
    maxLength: PropTypes.number,
    click: PropTypes.func
}

export default LessText
