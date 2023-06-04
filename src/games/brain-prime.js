import getRandomNumber from '../helper.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the given number is prime. Otherwise, answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generatePrimeQuestionAndAnswer = () => {
  const number = getRandomNumber(3, 15);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrime = () => {
  runGame(description, generatePrimeQuestionAndAnswer);
};

export default brainPrime;
