import getRandomNumber from '../helper.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(0, 50);
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber);
  return [question, correctAnswer];
};

const brainEven = () => {
  runGame(description, getQuestionAndAnswer);
};

export default brainEven;
