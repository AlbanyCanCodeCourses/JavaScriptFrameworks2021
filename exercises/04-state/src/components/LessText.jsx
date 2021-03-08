import { useState } from 'react';
const LessText = ({ text, maxLength }) => {
  const [readLess, setReadLess] = useState(false);
  return (
    <>
    <div className="border rounded p-2 mt-2 mb-2">
      {readLess ? text.slice(0, maxLength) + ' ...' : text}
    </div>
    
    <span className='m-2'><button className='btn btn-sm btn-primary mr-3' onClick={() => setReadLess(false)}>Read more</button></span>
    <span className='m-2'><button className='btn btn-sm btn-secondary ml-3' onClick={() => setReadLess(true)}>Read less</button></span>

    </>
  )
}

export default LessText;