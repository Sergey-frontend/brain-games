import readlineSync from 'readline-sync';
import name from '../index.js';
const description = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    let randomNumber1 = Math.round(Math.random() * 50);
    let randomNumber2 = Math.round(Math.random() * 50);

    const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `);
    const typeNumberOfUserAnswer = Number(userAnswer);

    while (randomNumber1 !== randomNumber2) {
      if (randomNumber1 > randomNumber2) {
        randomNumber1 -= randomNumber2;
      } else {
        randomNumber2 -= randomNumber1;
      }
    }
    const gcd = randomNumber1;
    if (typeNumberOfUserAnswer === gcd) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gcd}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainGcd;
