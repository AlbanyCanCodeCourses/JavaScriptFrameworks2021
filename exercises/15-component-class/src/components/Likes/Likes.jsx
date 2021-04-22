import { Component } from "react";

class Likes extends Component {
  state = {
    likes: 0,
  };

  /**
   *  Complete this function here to increment the likes counter
   *
   */

<<<<<<< HEAD
  like = () => {
    this.setState((currentState) => ({ likes: currentState.likes + 1 }));
  };
=======
  like = () => {};
>>>>>>> b16d83ee23493956204e90f113b9a125c02ef298

  render() {
    /**
     * Make the button functional
     */
    return (
      <div className="mt-4">
        <button className="btn btn-light">{this.state.likes} Likes</button>
      </div>
    );
  }
}

export default Likes;
