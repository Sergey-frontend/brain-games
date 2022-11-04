import {name} from "../src/index.js";
import readlineSync from "readline-sync";

export const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    let randomNumber = Math.round(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${randomNumber} `);

    const isEven = (randomNumber) => randomNumber % 2 === 0;
    const expectedAnswer = isEven(randomNumber) ? "yes" : "no";

    const isNotEven = (randomNumber) => randomNumber % 2 !== 0;
    const wrongAnswer = isNotEven(randomNumber) ? "yes" : "no";

    if (expectedAnswer === userAnswer) {
      console.log("Correct!");
    } else if (wrongAnswer === userAnswer) {
      console.log(
        `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`
      );
      break;
    } else if (userAnswer !== "yes" && userAnswer !== "no") {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again,${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
