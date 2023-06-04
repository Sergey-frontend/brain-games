import getRandomNumber from '../helper.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = (min, max) => {
  const randomNumber = getRandomNumber(min, max);
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const generateEvenQuestionAndAnswer = () => generateQuestionAndAnswer(0, 50);

const brainEven = () => {
  runGame(description, generateEvenQuestionAndAnswer);
};

export default brainEven;
