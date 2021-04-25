import React, { Component } from 'react';

export default class LessText extends Component {
  state = {
    text:
      "Excepteur consequat id adipisicing aliquip commodo ipsum consequat laborum enim labore nostrud ex. Occaecat in cillum id et occaecat sit aliquip aliquip cupidatat irure laborum dolor eiusmod. Reprehenderit ipsum tempor laboris officia est. Excepteur non velit quis ipsum qui consectetur reprehenderit magna. Veniam aliqua incididunt velit labore labore ad laborum eiusmod magna irure ad fugiat. Pariatur reprehenderit ut enim nostrud Lorem qui excepteur anim. Voluptate sit pariatur aute qui nostrud elit minim.",
    showAll: false
  };

  readMore = () => {
    this.setState({
        ...this.state,
        showAll: true
    })
  };

  readLess = () => {
    this.setState({
        ...this.state,
        showAll: false,
    });
  };

  render() {
    return (
      <div>
        <p>
          {this.state.showAll
            ? this.state.text
            : this.state.text.substring(0, 250)}
        </p>
        <button onClick={() => this.readMore()}>Read More</button>
        <button onClick={() => this.readLess()}>Read Less</button>
      </div>
    );
  }
}
