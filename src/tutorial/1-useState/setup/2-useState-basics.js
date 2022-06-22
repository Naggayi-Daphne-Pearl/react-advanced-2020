import React, { useState } from 'react';

// use is a keyword
// componentname must be uppercase
// hook must be in function/component body
// cannot call the hook conditionally

const UseStateBasics = () => {
  // daphne is the default value. 
  const[text, setText] = useState('daphne'); 
  const handleClick =() =>{
    if (text === 'daphne') {
      setText('naggayi');
    } else {
      setText('daphne');
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>Change title</button>
    </React.Fragment>

  )
};

export default UseStateBasics;
