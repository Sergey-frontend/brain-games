import getRandomNumber from '../helper.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const startProgNamber = getRandomNumber(0, 50);
  const randomStepOfProg = getRandomNumber(2, 10);
  const progressionArr = [];
  let result = startProgNamber;
  for (let i = 1; i <= 10; i += 1) {
    progressionArr.push(result);
    result += randomStepOfProg;
  }
  return progressionArr;
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomNumber(1, 9);
  const prog = getProgression();
  const correctAnswer = prog[randomSymbol].toString();
  prog[randomSymbol] = '..';
  const question = prog.join(' ');

  return [question, correctAnswer];
};

const brainProg = () => {
  runGame(description, getQuestionAndAnswer);
};

export default brainProg;
