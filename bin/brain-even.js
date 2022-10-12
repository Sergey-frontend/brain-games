import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?: ');
console.log(name);

console.log('Answer "yes" if the number is even, otherwise answer "no".')

const randomNumber = Math.round(Math.random() * 100);

const quest1 = readlineSync.question(`Question: ${randomNumber} `);

const checkQuest = () => {
    if (randomNumber % 2 === 0 && quest1 === 'yes') {
    return 'Correct!';
} else if (randomNumber % 2 !== 0 && quest1 === 'no') {
    return 'Correct!';
} else if (randomNumber % 2 === 0 && quest1 === 'no') {
    return `'no' is wrong answer ;(. Correct answer was 'yes' \nLet's try again, ${name}!`
} else if (randomNumber % 2 !== 0 && quest1 === 'yes') {
    return `'yes' is wrong answer ;(. Correct answer was 'no' \nLet's try again, ${name}!`
} else if (randomNumber % 2 === 0 && (quest1 !== 'yes' || quest1 !== 'no')) {
    return `${quest1} is wrong answer ;(. Correct answer was 'yes' \nLet's try again, ${name}!`
} else if (randomNumber % 2 !== 0 && (quest1 !== 'yes' || quest1 !== 'no')) {
    return `${quest1} is wrong answer ;(. Correct answer was 'no' \nLet's try again, ${name}!`
}
}
console.log(checkQuest())