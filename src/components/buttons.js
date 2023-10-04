import React, { useState } from 'react';
import './buttons.css'
export default function Buttons() {
  const[value,setValue] = useState('');
  const handleButtonClick = (newValue) => {
    setValue((prevValue) => prevValue + newValue);
  };

  const handleBackspaceClick = () => {
    setValue((prevValue) => prevValue.slice(0, -1));
  };
  const handleClearAll =() =>{
    setValue('')
  }

  const handleEvaluateClick = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (error) {
      setValue('Error');
    }
  };
  return (
    <>
    <div className='calculator'>
      <div className='input'>
        <input type='text' placeholder='0' className='input-textbox' value={value} readOnly ></input>
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
    <button type='button' onClick={() => handleBackspaceClick()}>.</button>
    <button type="button" onClick={() => handleClearAll()}>C</button>
    <button type="button" onClick={() => handleEvaluateClick()}>=</button>
    
    </div>
    </div>
    </>
  )
}
