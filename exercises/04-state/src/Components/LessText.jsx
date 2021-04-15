import React from "react";

class LessText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showMore: true}
    }


  render() {
    return (
      <div>
        <p>
            {this.state.showMore ? this.props.text : this.props.text.slice(0,20)+"..."}
        </p>
        <button className="btn-dark m-2" onClick={() => this.setState({showMore: true})}>Read More</button>
        <button className="btn-dark m-2" onClick={() => this.setState({showMore: false})}>Read Less</button>
      </div>
    );
  }
}

export default LessText;