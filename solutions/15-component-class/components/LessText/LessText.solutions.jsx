/**
 * Compare to hooks version
 * @see solutions/04-state/LessText.solutions.jsx
 */
import { Component } from "react";

class LessText extends Component {
  state = {
    isHidden: false,
  };
  render() {
    return (
      <div>
        <p>
          {!this.state.isHidden
            ? this.props.text.substr(0, this.props.maxLength).trim()
            : this.props.text}
        </p>
        <div>
          <button
            type="button"
            className="btn btn-dark mr-2"
            onClick={() => this.setState({ isHidden: true })}
          >
            Read More
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => this.setState({ isHidden: false })}
          >
            Read Less
          </button>
        </div>
      </div>
    );
  }
}

export default LessText;
