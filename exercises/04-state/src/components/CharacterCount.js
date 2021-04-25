import React from 'react';
import PropTypes from 'prop-types';

const CharacterCount = ({userInput, change}) => {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => change(e.target.value.length)}
        ></input>
        <p>{userInput}</p>
      </div>
    );
}

CharacterCount.propTypes = {
    userInput: PropTypes.number,
    setUserInput: PropTypes.func
}

export default CharacterCount;
