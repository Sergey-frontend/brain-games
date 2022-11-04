import { name } from "../src/index.js";
import readlineSync from "readline-sync";

export const brainProg = () => {
  console.log("What number is missing in the progression?");

  for (let i = 0; i < 3; i += 1) {
    let startProgNamber = Math.round(Math.random() * 50);
    const randomProgValue = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
    const randomProgLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    let progressionArr = [startProgNamber];
    for (let i = 1; i < randomProgLength; i += 1) {
      startProgNamber = startProgNamber + randomProgValue;
      progressionArr.push(startProgNamber);
    }
    const middleSymbol = Math.round((progressionArr.length - 1) / 2);
    const correctAnswer = Number(progressionArr[middleSymbol]);
    progressionArr[middleSymbol] = "..";
    const progressionString = progressionArr.join();
    const userAnswer = readlineSync.question(`Question: ${progressionString}\nYour answer: `);

    if (Number(userAnswer) === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again,${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
