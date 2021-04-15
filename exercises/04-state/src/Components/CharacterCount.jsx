import React, { useState } from 'react'

const CharacterCount = (props) => {
    const [count,setCount] = useState(0);

    return (
        <div>
            <p>Records the amount of words you type!</p>
            <textarea name="" id="countThis" cols="30" rows=""
                onChange={(event) => setCount(event.target.value.length)}
            ></textarea>
            <p>Character Count: {count}</p>
        </div>
    )
}

export default CharacterCount;