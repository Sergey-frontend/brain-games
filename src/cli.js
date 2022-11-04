import readlineSync from 'readline-sync';

const howYourName = () => {
    const name = readlineSync.question('May I have your name? ');
    return `Hello, ${name}!`;
}
export {howYourName};