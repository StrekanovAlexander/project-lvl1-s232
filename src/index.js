import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games');

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
