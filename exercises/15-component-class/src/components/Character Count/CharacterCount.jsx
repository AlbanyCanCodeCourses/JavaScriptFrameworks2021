import React, { Component } from "react";

export default class CharacterCount extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <p>Records the amount of words you type!</p>
        <textarea
          name=""
          id="countThis"
          cols="30"
          rows=""
          onChange={(event) =>
            this.setState({ count: event.target.value.length })
          }
        ></textarea>
        <p>Character Count: {this.state.count}</p>
      </div>
    );
  }
}
