import readlineSync from 'readline-sync';
import name from '../index.js';
// основные переменные
const description = 'What is the result of the expression?';
let userAnswer;
let result;

// создание рандомного оператора
const getRandomOperator = () => {
  const operands = ['+', '-', '*'];
  const operand = Math.floor(Math.random() * operands.length);
  const randomOperand = operands[operand];
  return randomOperand;
};

// использование свича для конструкции
// с добавлением рандомных чисел
const caseForRandomoperator = () => {
  const randomNumber1 = Math.round(Math.random() * 50);
  const randomNumber2 = Math.round(Math.random() * 50);
  switch (getRandomOperator()) {
    case '+':
      userAnswer = readlineSync.question(`Question: ${randomNumber1} + ${randomNumber2}\nYour answer: `);
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      userAnswer = readlineSync.question(`Question: ${randomNumber1} - ${randomNumber2}\nYour answer: `);
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      userAnswer = readlineSync.question(`Question: ${randomNumber1} * ${randomNumber2}\nYour answer: `);
      result = randomNumber1 * randomNumber2;
      break;
    default:
      break;
  }
};

const brainCalc = () => {
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    caseForRandomoperator();
    const typeNumberOfUserAnswer = Number(userAnswer);
    if (typeNumberOfUserAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainCalc;
