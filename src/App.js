import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Erro');
      }
    } else if (value === 'C') {
      setResult('');
      setInput('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="input" />
      <input type="text" value={result} readOnly className="result" />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('C')} className="clear">C</button>
      </div>
    </div>
  );
}

export default Calculator;
