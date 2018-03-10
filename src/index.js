import readlineSync from 'readline-sync';
import { cons, car, cdr, calcPair, operToString, pairToString, getArrGcd, getResultGcd } from './pair.js';

console.log('Welcome to the Brain Games');

<<<<<<< HEAD
export const greetUser = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${playerName}`);
};

const runGame = (taskHeader, task)  => {
  let counter = 0, counterCorrect = 0;
  console.log(taskHeader);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${playerName}`);
  while (counter < 3) {
    const theTask = task();
    console.log(`Question: ${theTask.quest}`);
    const answer = readlineSync.question(`Your answer: `);
    if (answer === theTask.answ) {
      console.log('Correct!');
      counterCorrect += 1;
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${theTask.answ}'. Let's try again, ${playerName}`);
    }
    counter += 1;
  }
  if (counter === counterCorrect) {
    console.log(`Congratulations, ${playerName}!`);
  }
};
export default runGame;
=======
const printStr = str => {
  console.log(str);
};

const appHeader = 'Welcome to the Brain Games';
const greetPlayer = (playerName) => `Hello, ${playerName}`;

const printCongrat = (count, countCorrect, playerName) => {
  if (count === countCorrect) {
    printStr(`Congratulations, ${playerName}!`);
  }
};

const printWrong = (answer, answerCorrect, playerName) => {
    printStr(`'${answer}' is wrong answer ;(. Correct answer was ${answerCorrect}. Let's try again, ${playerName}`);
};

const getRand = (min, max) => Math.floor((Math.random() * max) + min);

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
      pair = cons(getRand(1, 10), getRand(1, 10));
      oper = arrOper[getRand(0, 3)];
      printStr(`Question ${operToString(pair, oper)}`);
      answer = getAnswer('Your answer: ');
      if (Number(answer) === calcPair(pair, oper)) {
        printStr('Correct!');
        counterCorrect += 1;
      }
      else{
        printWrong(answer, calcPair(pair, oper), playerName);
      }
      counter += 1;
  }
  printCongrat(counter, counterCorrect, playerName);
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
    let result = 1;
    for (let i = 0; i < arr1.length; i += 1) {
      for (let j = 0; j < arr2.length; j += 1) {
          if (arr1[i] === arr2[j]){
            result = arr1[i];
            break;
          }
      }
      if (result > 1) {
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
      pair = cons(getRand(1, 100), getRand(1, 100));
      result = getResult(getArr(car(pair)), getArr(cdr(pair)));
      printStr(`Question ${pairToString(pair)}`);
      answer = getAnswer('Your answer: ');
      if (Number(answer) === result) {
        printStr('Correct!');
        counterCorrect += 1;
      }
      else{
        printWrong(answer, result, playerName);
      }
      counter += 1;
  }
  printCongrat(counter, counterCorrect, playerName);
};

export { getAnswer, getCorrectAnswer, isCorrectAnswer, getCalc, getGcd };
>>>>>>> 4c2846e49afa7910cf098bb1730d70e93c16c416
