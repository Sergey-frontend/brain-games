import { getRandomNumber } from '../helper.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (x) => {
  for (let y = 2; y < x; y += 1) {
    if (x % y === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(3, 15);
  const question = `${firstNumber}`;
  const correctAnswer = isPrime(firstNumber);
  return [question, correctAnswer];
};

const brainPrime = () => {
  runGame(description, getQuestionAndAnswer);
};

export default brainPrime;
