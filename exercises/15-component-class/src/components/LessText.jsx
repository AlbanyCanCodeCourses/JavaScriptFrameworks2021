import { Component } from "react";

class LessText extends Component {

  state = {
    readLess: false,
  };

  readMore = () => {
    this.setState({readLess: false});
  };
  readLess = () => {
    this.setState({readLess: true});
  }

  render() {
    return (
      <div>
        <p>
          {this.state.readLess
          ? this.props.text.slice(0, this.props.maxLength) + "..."
          : this.props.text}
        </p>
      <button className="btn btn-light" onClick={this.readMore}>
        Read More
      </button>
      <button className="btn btn-light" onClick={this.readLess}>
        Read Less
      </button>
      </div>
    );
  }
}

export default LessText;