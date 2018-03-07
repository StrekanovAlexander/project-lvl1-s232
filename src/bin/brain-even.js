#!/usr/bin/env node

import { getAnswer, getCorrectAnswer, isCorrectAnswer } from '..';

console.log('Welcome to the Brain Games');
console.log('Answer "yes" if number even otherwise answer "no".\n');
const playerName= getAnswer('\nMay I have your name? ');
let answer = '', correctAnswer;
let counter = 0, counterCorrect = 0, num;
while (counter < 3) {
  num = Math.floor(Math.random() * 100);
  correctAnswer = getCorrectAnswer(num);
  console.log(`Question: ${num}`);
  answer = getAnswer(`Your answer: `);
  if (isCorrectAnswer(answer, correctAnswer)) {
    console.log('Correct!');
    counterCorrect += 1;
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${playerName}`);
  }
  counter += 1;
}

if (counter === counterCorrect) {
  console.log(`Congratulations, ${playerName}!`);
}
