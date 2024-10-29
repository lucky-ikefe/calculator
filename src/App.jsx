import React from 'react'
import { useReducer } from 'react'
import DigitButton from './DigitButton'
import './index.css'
import OperationButton from './OperationButton'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}


function reducer(state, {type, payload}) {


  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if(state.overwrite === true){
        return{
          ...state,
          currOperand: payload.digit,
          overwrite: false
        }
      }
      if (state.currOperand === '0' && payload.digit === '0') {
        return state
      }
      if (payload.digit === '.' && state.currOperand == null) {
        return state
      }
      if (payload.digit === '.' && state.currOperand.includes('.')) {
        return state
      }
      return {
        ...state, currOperand: `${state.currOperand || ""}${payload.digit}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currOperand == null && state.prevOperand == null) {
        return state
      }
      if (state.currOperand == null){
        return {
          ...state, operation: payload.operation
        }
      }
      if (state.prevOperand == null) {
        return{
          ...state,
          prevOperand: state.currOperand,
          operation: payload.operation,
          currOperand: null
        }
      }
      return{
        ...state,
        prevOperand: evaluate(state),
        operation: payload.operation,
        currOperand: null,
      }

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if(state.overwrite){
        return{
          ...state,
          currOperand: null,
          overwrite: false
        }
      }
      if(state.currOperand == null){
        return {}
      }
      if(state.currOperand.length === 1){
        return{
          ...state,
          currOperand: null
        }
      }
      return {
        ...state,
        currOperand: state.currOperand.slice(0, -1)
      }

    case ACTIONS.EVALUATE:
      if ( state.currOperand == null || state.prevOperand == null || state.operation == null) {
        return{
          ...state
        }
      }
      return{
        ...state,
        currOperand: evaluate(state),
        prevOperand: null,
        operation: null,
        overwrite: true
      }
  }

}

function evaluate({currOperand, prevOperand, operation}) {
  const curr = parseFloat(currOperand);
  const prev = parseFloat(prevOperand);
  if (isNaN(prev) || isNaN(curr))return "";
  let computation = ''
  switch(operation) {
    case '+':
      computation = prev + curr;
      break
    case '-':
      computation = prev - curr;
      break
    case '*':
      computation = prev * curr;
      break
    case '/':
      computation = prev / curr;
      break
  }

  return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
})

function formatOperand(operand) {
  if (operand == null) return
  const [integer, decimal] = operand.split('.');
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

export default function App() {

  const [{ prevOperand, currOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className='container'>
      <div className="output">
        <div className="prevOperand">{formatOperand(prevOperand)} {operation}</div>
        <div className="currOperand">{formatOperand(currOperand)}</div>
      </div>
      <button className='doubleSpan' onClick={() => {dispatch({type: ACTIONS.CLEAR})}}>AC</button>
      <button onClick={() => {dispatch({type: ACTIONS.DELETE_DIGIT})}} >
        DEL
      </button>
      <OperationButton operation='/' dispatch={dispatch} />
      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <OperationButton operation='*' dispatch={dispatch} />
      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <OperationButton operation='+' dispatch={dispatch} />
      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <OperationButton operation='-' dispatch={dispatch} />
      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      <button className='doubleSpan' onClick={() => {dispatch({type: ACTIONS.EVALUATE})}}>=</button>
    </div>
  )
}
