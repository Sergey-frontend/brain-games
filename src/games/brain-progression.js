import getRandomNumber from '../helper.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const startNum = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 9);
  const progression = getProgression(startNum, step);
  const randomIndex = getRandomNumber(0, 9);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const brainProg = () => {
  runGame(description, getQuestionAndAnswer);
};

export default brainProg;
