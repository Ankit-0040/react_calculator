import React, { useState } from 'react';
import './buttons.css'
export default function Buttons() {
  const[value,setValue] = useState('');
  const handleButtonClick = (newValue) => {
    // Append the clicked button's value to the current input value
    setValue((prevValue) => prevValue + newValue);
  };

  const handleBackspaceClick = () => {
    // Remove the last character from the current input value
    setValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleEvaluateClick = () => {
    try {
      // Use the eval function to evaluate the expression
      const result = eval(value);
      // Set the result as the new input value
      setValue(result.toString());
    } catch (error) {
      // Handle any evaluation errors (e.g., syntax error)
      setValue('Error');
    }
  };
  return (
    <>
    <div className='calculator'>
      <div className='input'>
        <input type='text' placeholder='0' value={value} readOnly ></input>
      </div>
    <div className='buttons'>
    <button type='button' onClick={() => handleButtonClick('+')}>+</button>
    <button type='button' onClick={() => handleButtonClick('-')}>-</button>
    <button type='button' onClick={()=> handleButtonClick('/')}>/</button>
    <button type='button' onClick={()=> handleButtonClick('*')}>*</button>
    <button type="button" onClick={()=> handleButtonClick('9')}>9</button>
    <button type="button" onClick={()=> handleButtonClick('8')}>8</button>
    <button type="button" onClick={()=> handleButtonClick('7')}>7</button>
    <button type="button" onClick={()=> handleButtonClick('6')}>6</button>
    <button type="button" onClick={()=> handleButtonClick('5')}>5</button>
    <button type="button" onClick={()=> handleButtonClick('4')}>4</button>
    <button type="button" onClick={()=> handleButtonClick('3')}>3</button>
    <button type="button" onClick={()=> handleButtonClick('2')}>2</button>
    <button type="button" onClick={()=> handleButtonClick('1')}>1</button>
    <button type="button" onClick={()=> handleButtonClick('0')}>0</button>
    <button type='button' onClick={() => handleBackspaceClick()}>&larr;</button>
    <button type="button" onClick={() => handleEvaluateClick()}>=</button>
    </div>
    </div>
    </>
  )
}
