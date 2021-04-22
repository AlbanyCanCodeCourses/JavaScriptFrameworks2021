import { Component } from "react";

class CharacterCount extends Component {
  state = {
    characterCount: 0,
  };

  handleChange = (e) => {
    this.setState({ characterCount: e.target.value.length });
  };

  render() {
    return (
      <div>
        <textarea
          type="text"
          class="form-control input-group input-group-sm mt-3 mb-1"
          onChange={this.handleChange}
        />
        <p>Character count: {this.state.characterCount}</p>
      </div>
    );
  }
}

export default CharacterCount;
