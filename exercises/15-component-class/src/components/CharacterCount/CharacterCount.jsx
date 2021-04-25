import React, { Component } from 'react'

export default class CharacterCount extends Component {
  state = {
    count: 0,
  };

  countCharacters = (e) => {
    this.setState({
      count: e.target.value.length,
    });
  };

  render() {
    return (
      <div>
        <input onChange={(e) => this.countCharacters(e)}></input>
        <p>Character Count: {this.state.count}</p>
      </div>
    );
  }
}
