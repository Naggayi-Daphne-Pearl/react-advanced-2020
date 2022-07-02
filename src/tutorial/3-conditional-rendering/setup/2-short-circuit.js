import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const[text, setText] = useState('')
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
  {/* <h1> {firstValue}</h1>
  <h2>value : {secondValue}</h2> */}
  {/* || if false display john doe */}
  <h1>{text || 'john doe'}</h1>
  {/* if true  display hello world  */}
  {text && <h1>hello world</h1>}
  </>
};

export default ShortCircuit;
