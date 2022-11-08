import { getRandomNumber } from '../helper.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';
const operationSymbols = ['+', '-', '*'];

// создание рандомного оператора
const getRandomOperation = () => {
  const randomOperand = Math.floor(Math.random() * operationSymbols.length);
  const operand = operationSymbols[randomOperand];
  return operand;
};

// использование свича для конструкции
const calculateOperations = (symbol, firstValue, secondValue) => {
  switch (symbol) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomOperation(operationSymbols);
  const firstNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);

  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const correctAnswer = String(calculateOperations(randomSymbol, firstNumber, secondNumber));

  return [question, correctAnswer];
};
const brainCalc = () => {
  runGame(description, getQuestionAndAnswer);
};
export default brainCalc;
