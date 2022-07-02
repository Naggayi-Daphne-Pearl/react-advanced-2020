import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const[text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
  {/* <h1> {firstValue}</h1>
  <h2>value : {secondValue}</h2> */}
  
  {/* || if false display john doe */}
  <h1>{text || 'john doe'}</h1>
  <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>

  {/* if error is true display error...*/}
  {isError && <h1>error...</h1>}

  {/* We do not use if because it doesnt return a value */}
  {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
  </>
};

export default ShortCircuit;
