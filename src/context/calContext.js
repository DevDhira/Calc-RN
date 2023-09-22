import React, { createContext, useState } from 'react'
import calculate from '../utils/calculate'

export const CalContext = createContext()

export function CalcContextProvider({ children }) {

 
  const [cursorPosition, setCursorPosition] = useState(0);
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')
  const [fSize, setFSize] = useState(50)
  const [rSize, setRSize] = useState('7xl')

  const doCalculation = (newExpression) => {
    //console.log('Calculating');
    setExpression(newExpression);
    const r = calculate(newExpression);
    if(r != newExpression){
    setResult(r.toString());
    }
  }

  const handleButtonPress = (n) => {
    const newPosition = cursorPosition + n.length;

    if (n === 'C') {
      setExpression('');
      setResult('');
      setCursorPosition(0);
    } else if (n === '()') {
      const openParenthesisCount = (expression.match(/\(/g) || []).length;
      const closeParenthesisCount = (expression.match(/\)/g) || []).length;

      if (openParenthesisCount > closeParenthesisCount) {
        setExpression(expression + ')');
      } else {
        setExpression(expression + '(');
      }
      
      setCursorPosition(cursorPosition + 1);
      //doCalculation(expression)
    
    } else if (n === '±') {
      const newExpression =
        expression.slice(0, cursorPosition) + '(−' + expression.slice(cursorPosition);
      setExpression(newExpression);
      setCursorPosition(cursorPosition + 2);
      doCalculation(newExpression)
    } else if (n === '=') {
      const result = calculate(expression);
      setExpression(result.toString());
      setResult('');
      setCursorPosition(expression.toString().length);
    } else {
      const newExpression =
        expression.slice(0, cursorPosition) + n + expression.slice(cursorPosition);

      setExpression(newExpression);
      setResult('');
      setCursorPosition(newPosition);
      doCalculation(newExpression)
    }
  };

  const handleSelectionChange = (e) => {
    // Update the cursor position when the selection 
    console.log(cursorPosition)
    setCursorPosition(e.nativeEvent.selection.start);
  };

  const clearExpression = () => {
    // If the cursor is at the start, do nothing
    if (cursorPosition === 0) {
      return;
    }

    // Remove the character just before the cursor position
    const newExpression =
      expression.slice(0, cursorPosition - 1) +
      expression.slice(cursorPosition);

    // Update the expression state and set the new cursor position
    setExpression(newExpression);
    doCalculation(newExpression)
    setCursorPosition(cursorPosition - 1);
  };



  return (
    <CalContext.Provider
      value={{
        cursorPosition, setCursorPosition,
        expression, setExpression,
        result, setResult,
        fSize, setFSize,
        rSize, setRSize,
        handleButtonPress,handleSelectionChange,clearExpression
      }}
    >
      {children}
    </CalContext.Provider>
  )
}
