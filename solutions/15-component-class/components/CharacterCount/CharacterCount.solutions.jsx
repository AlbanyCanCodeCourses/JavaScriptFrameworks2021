/**
 * Compare this with hooks.
 * @see solutions/04-state/CharacterCount.solutions.jsx
 */
import { Component } from "react";

class CharacterCount extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <p>Records the amount of words you type!</p>
        <textarea
          className="form-control"
          onChange={(e) => this.setState({ count: e.target.value.length })}
        />
        <p className="lead">Character Count: {this.state.count} </p>
      </>
    );
  }
}

export default CharacterCount;
