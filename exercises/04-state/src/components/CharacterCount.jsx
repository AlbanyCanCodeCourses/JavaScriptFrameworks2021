import { useState } from 'react';

const CharacterCount = () => {
  const [count, setCount] = useState(0);
  return(
    <div>
      <textarea onChange={e => setCount(e.target.value.length)}></textarea>
      <div>Character count: {count}</div>
    </div>
  )
}

export default CharacterCount;