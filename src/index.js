import readlineSync from 'readline-sync';
import { cons, car, cdr, calcPair, operToString, pairToString, getArrGcd, getResultGcd } from './pair.js';

const getAnswer = quest => readlineSync.question(quest);
const isNumEven = num => num % 2 === 0 ? true : false;
const getCorrectAnswer = num => isNumEven(num) ? 'yes' : 'no';
const isCorrectAnswer = (answ, correctAnsw) => answ === correctAnsw ? true : false;

const printStr = str => {
  console.log(str);
};

const appHeader = 'Welcome to the Brain Games';
const greetPlayer = (playerName) => `Hello, ${playerName}`;
const getRand = (max) => Math.floor(Math.random() * max + 1)

const getCalc = () => {
  const arrOper = ['+', '-', '*'];
  printStr(appHeader);
  printStr('What is the result of expression\n');
  const playerName = getAnswer('May I have your name? ');
  printStr(greetPlayer(playerName));
  let pair, oper;
  let answer;
  let counter = 0, counterCorrect = 0;
  while (counter < 3) {
      pair = cons(getRand(10), getRand(10));
      oper = arrOper[getRand(3)];
      printStr(`Question ${operToString(pair, oper)}`);
      answer = getAnswer('Your answer: ');
      if (Number(answer) === calcPair(pair, oper)) {
        printStr('Correct!');
        counterCorrect += 1;
      }
      else{
        printStr(`'${answer}' is wrong answer ;(. Correct answer was ${calcPair(pair, oper)}. Let's try again, ${playerName}`);
      }
      counter += 1;
  }
  if (counter === counterCorrect) {
      printStr(`Congratulations, ${playerName}!`);
  }
};

const getGcd = () => {
  const getArr = num => {
    let arr = [];
    for (let i = 1; i < num; i += 1) {
      if (num % i === 0) {
        arr.push(num / i);
      }
    }
    return arr;
  };

  const getResult = (arr1, arr2) => {
    let result = 0;
    for (let i = 0; i < arr1.length; i += 1) {
      for (let j = 0; j < arr2.length; j += 1) {
          if (arr1[i] === arr2[j]){
            result = arr1[i];
            break;
          }
      }
      if (result > 0) {
        break;
      }
    }
    return result;
  };

  printStr(appHeader);
  printStr('Find the greatest common divisor of given numbers.\n');
  const playerName = getAnswer('May I have your name? ');
  printStr(greetPlayer(playerName));
  printStr('');
  let pair, result;
  let answer;
  let counter = 0, counterCorrect = 0;
  while (counter < 3) {
      pair = cons(getRand(100), getRand(100));
      result = getResult(getArr(car(pair)), getArr(cdr(pair)));
      printStr(`Question ${pairToString(pair)}`);
      answer = getAnswer('Your answer: ');
      if (Number(answer) === result) {
        printStr('Correct!');
        counterCorrect += 1;
      }
      else{
        printStr(`'${answer}' is wrong answer ;(. Correct answer was ${result}. Let's try again, ${playerName}`);
      }
      counter += 1;
  }
  if (counter === counterCorrect) {
      printStr(`Congratulations, ${playerName}!`);
  }
}

export { getAnswer, getCorrectAnswer, isCorrectAnswer, getCalc, getGcd };
