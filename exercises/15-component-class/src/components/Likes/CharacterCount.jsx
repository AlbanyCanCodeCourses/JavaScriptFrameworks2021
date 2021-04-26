import { Component } from 'react';


class CharacterCount extends Component{
    state = {
        characters : 0,
    }

    characterCounter = (e)=>{
        this.setState({characters: e.target.value.length})
    }
    render(){
        return(
            <div>
                <textarea name="" id="" cols="30" rows="10" onChange={this.characterCounter}></textarea>
                <div>Character Count: {this.state.characters}</div>
            </div>

        );
    }
 

}

export default CharacterCount;