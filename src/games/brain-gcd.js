import getRandomNumber from '../helper.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y > x) {
    return getGcd(y, x);
  } if (!y) {
    return x;
  }
  return getGcd(y, x % y);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  return [question, correctAnswer];
};
const brainGcd = () => {
  runGame(description, getQuestionAndAnswer);
};

export default brainGcd;
