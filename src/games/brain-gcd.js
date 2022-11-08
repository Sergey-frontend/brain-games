import { getRandomNumber } from '../helper.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const nod = (x, y) => {
  if (y > x) {
    return nod(y, x);
  } if (!y) {
    return x;
  }
  return nod(y, x % y);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(nod(firstNumber, secondNumber));
  return [question, correctAnswer];
};
const brainGcd = () => {
  runGame(description, getQuestionAndAnswer);
};

export default brainGcd;
