import readlineSync from 'readline-sync';

const getAnswer = quest => readlineSync.question(quest);
const isNumEven = num => num % 2 === 0 ? true : false;
const getCorrectAnswer = num => isNumEven(num) ? 'yes' : 'no';
const isCorrectAnswer = (answ, correctAnsw) => answ === correctAnsw ? true : false;

export { getAnswer, getCorrectAnswer, isCorrectAnswer };
