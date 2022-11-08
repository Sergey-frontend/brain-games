import { getRandomNumber } from '../helper.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(0, 50);
  const isEven = () => randomNumber % 2 === 0;
  const question = `${randomNumber}`;
  const correctAnswer = isEven() ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => {
  runGame(description, getQuestionAndAnswer);
};

export default brainEven;
