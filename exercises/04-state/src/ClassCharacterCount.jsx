import React from "react"
import {useState} from "react";

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: ""};
    
        this.handleOnChange = (e) => {
        this.setState({content: e.target.value})
    }}
    
    render() {
    return(
        <div>
            <textarea value= {this.state.content} onChange={this.handleOnChange}></textarea>
            <div>
                Character Count: {this.state.content.length}
            </div>
        </div>

    );
};
}
export default Characters;