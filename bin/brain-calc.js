// #!/usr/bin/env node
import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');




for (let i = 0; i < 3; i += 1) {
    let randomNumber1 = Math.round(Math.random() * 200);
    let randomNumber2 = Math.round(Math.random() * 200);

    const operands = ['+','-','*'];
    const operand = Math.floor(Math.random() * operands.length);

    switch (operands[operand]) {
        case '+':
            const userAnswer = readlineSync.question(`Question: ${randomNumber1} + ${randomNumber2} `);
            const userResult = Number(userAnswer);
            const result = randomNumber1 + randomNumber2;
            if (userResult === result) {
                console.log('Correct!');
            } else {
                console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again,${name}!`);
                break;
            }
            break;
        case '-':
            const userAnswer2 = readlineSync.question(`Question: ${randomNumber1} - ${randomNumber2} `);
            const userResult2 = Number(userAnswer2);
            const result2 = randomNumber1 - randomNumber2;
            if (userResult2 === result2) {
                console.log('Correct!');
            } else {
                console.log(`'${userAnswer2}' is wrong answer ;(. Correct answer was '${result2}'.\nLet's try again,${name}!`);
                break;
            }
            break;
        case '*':
            const userAnswer3 = readlineSync.question(`Question: ${randomNumber1} * ${randomNumber2} `);
            const userResult3 = Number(userAnswer3);
            const result3 = randomNumber1 * randomNumber2;
            if (userResult3 === result3) {
                console.log('Correct!');
            } else {
                console.log(`'${userAnswer3}' is wrong answer ;(. Correct answer was '${result3}'.\nLet's try again,${name}!`);
                break;
            }
            break;
        }
    }