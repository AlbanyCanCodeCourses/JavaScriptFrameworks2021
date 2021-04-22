import { Component } from "react";

class LessText extends Component {
  state = {
    lessText: this.props.maxLength,
  };

  showMoreText = () => {
    this.setState({ lessText: this.props.text.length });
  };

  showLessText = () => {
    this.setState({ lessText: this.props.maxLength });
  };

  render() {
    return (
      <div>
        <p>{this.props.text.substring(0, this.state.lessText)}</p>
        <button
          type="button"
          class="btn btn-dark m-1"
          onClick={this.showMoreText}
        >
          Read More
        </button>
        <button
          type="button"
          class="btn btn-dark m-1"
          onClick={this.showLessText}
        >
          Read Less
        </button>
      </div>
    );
  }
}

export default LessText;
