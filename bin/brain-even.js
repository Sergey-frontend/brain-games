import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".')

let randomNumber = Math.round(Math.random() * 100);

const userAnswer = readlineSync.question(`Question: ${randomNumber} `);

const isEven = randomNumber => randomNumber % 2 === 0;
const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
if (expectedAnswer === userAnswer) {
  console.log('Correct!');
}

const isNotEven = randomNumber => randomNumber % 2 !== 0;
const wrongAnswer = isNotEven(randomNumber) ? 'yes' : 'no';
if (wrongAnswer === userAnswer) {
  console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
}

const thisIsNotAnAnswer = () => {
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    }
}
thisIsNotAnAnswer();
