import readlineSync from 'readline-sync';
import name from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

    const isEven = () => randomNumber % 2 === 0;
    const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';

    const isNotEven = () => randomNumber % 2 !== 0;
    const wrongAnswer = isNotEven(randomNumber) ? 'yes' : 'no';

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else if (wrongAnswer === userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
      break;
    } else if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default brainEven;
