import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumberClick = (number) => {
    if (displayValue === '0' || waitingForSecondOperand) {
      setDisplayValue(number.toString());
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleOperatorClick = (op) => {
    setWaitingForSecondOperand(true);
    setOperator(op);
    setFirstOperand(parseFloat(displayValue));
  };

  const handleEqualClick = () => {
    const secondOperand = parseFloat(displayValue);

    switch (operator) {
      case '+':
        setDisplayValue((firstOperand + secondOperand).toString());
        break;
      case '-':
        setDisplayValue((firstOperand - secondOperand).toString());
        break;
      case '×':
        setDisplayValue((firstOperand * secondOperand).toString());
        break;
      case '÷':
        setDisplayValue((firstOperand / secondOperand).toString());
        break;
      default:
        break;
    }

    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={handleClearClick} className="clear-button">AC</button>
        <button onClick={() => handleOperatorClick('÷')} className="operator-button">÷</button>
        <button onClick={() => handleOperatorClick('×')} className="operator-button">×</button>
        <button onClick={() => handleOperatorClick('-')} className="operator-button">-</button>
        <button onClick={() => handleOperatorClick('+')} className="operator-button">+</button>
        <button onClick={handleDecimalClick}>.</button>
        <button onClick={handleEqualClick} className="equal-button">=</button>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleNumberClick(0)} className='full'>0</button>
      </div>
    </div>
  );
};

export default App;
