import { name } from "../src/index.js";
import readlineSync from "readline-sync";

export const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNamber = Math.floor(Math.random() * (15 - 3 + 1)) + 3;
    const userAnswer = readlineSync.question(`Question: ${randomNamber} `);
    
    let correctAnswer = "yes";

    for (let x = 2; x < randomNamber; x += 1) {
      if (randomNamber % x === 0) {
        correctAnswer = "no";
        continue;
      }
    }
    if (userAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again,${name}!`
      );
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}`);
    }
  }
};
