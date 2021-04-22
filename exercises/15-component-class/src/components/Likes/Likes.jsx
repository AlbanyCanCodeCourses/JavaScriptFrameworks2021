import { Component } from "react";

class Likes extends Component {
  state = {
    likes: 0,
  };

  like = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <div className="mt-4">
        <button className="btn btn-light" onClick={this.like}>
          {this.state.likes} Likes
        </button>
      </div>
    );
  }
}

export default Likes;
