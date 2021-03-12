import React from "react"
import {useState} from "react";


function CharacterCount() {
    const [characterCount, setCharacterCount] = useState();
    return (
                <div>
                    <textarea value= {characterCount} onChange={(e)=> {setCharacterCount(e.target.value)}}></textarea>
                    <div>
                        Character Count: {characterCount.length}
                    </div>
                </div>

    )
}
// class Characters extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {content: ""};
    
//         this.handleOnChange = (e) => {
//         this.setState({content: e.target.value})
//     }}
    
//     render() {
//     return(
//         <div>
//             <textarea value= {this.state.content} onChange={this.handleOnChange}></textarea>
//             <div>
//                 Character Count: {this.state.content.length}
//             </div>
//         </div>

//     );
// };
// }
export default CharacterCount;