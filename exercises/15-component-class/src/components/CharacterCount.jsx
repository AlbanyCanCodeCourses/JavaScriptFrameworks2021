import { Component } from "react";

class CharacterCount extends Component {

  state = {
    text: ""
  };

  handleChange = e => this.setState({text: e.target.value})

  render() {
    return (
      <>
      <textarea style={{"width": "75%"}} value={this.state.text} onChange={(e) => this.handleChange(e)}/>
      <p>Character count: {this.state.text.length}</p>
      </>
    );
  }
}

export default CharacterCount;