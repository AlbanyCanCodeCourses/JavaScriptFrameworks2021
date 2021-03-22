import React from "react";
import {useState} from "react";

class LessText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          showLessFlag: true,
          displayText: this.props.text
        };
    }

    modifyText(showLessFlag) {
        let result ="";
        if(showLessFlag){
            result = this.props.text.substring(0, this.props.maxLength);
        } else {
            result = this.props.text;
        }

        this.setState({
            displayText: result
        });
      }

    // let trimString = function(text) {
    //     this.setState({
    //         displayText: this.setStatetext.substring(0,props.maxLength)
    //       });
    // }
    // // const [more, setMore] = useState(true);
    // // const less = () => setMore(false);
    render() {
        return (
            <div> 
                <button onClick={() => this.modifyText(false)}>Read More</button>
                <button onClick={() => this.modifyText(true)}>Read Less</button>
                <div>{this.state.displayText}</div>
            </div>
        );
    }
}


// function LessText(text, maxLength) {
//     const [more, setMore] = useState(true);
//     const less = () => setMore(false);
//     return(
//     <div>
//         <button onClick={text}>Read More</button>
//         <button onClick={text.substring(0,maxLength)}>Read Less</button>
//     </div>
//     );
// };

export default LessText;