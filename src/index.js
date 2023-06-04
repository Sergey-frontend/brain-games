import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const askName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const printQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const checkAnswer = (userAnswer, correctAnswer, name) => {
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const congratulateUser = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const runGame = (gameDescription, questionAndAnswer) => {
  const name = askName();
  console.log(gameDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = questionAndAnswer();
    printQuestion(question);
    const userAnswer = getUserAnswer();
    const isAnswerCorrect = checkAnswer(userAnswer, correctAnswer, name);
    if (!isAnswerCorrect) {
      break;
    }
    if (i === numberOfRounds - 1) {
      congratulateUser(name);
    }
  }
};

export default runGame;
