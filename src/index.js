#!/usr/bin/env node
import readlineSync from 'readline-sync';

const runGame = (gameDescription, questionAndAnswer) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default runGame;
