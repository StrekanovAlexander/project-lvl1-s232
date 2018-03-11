import { getRand } from '../other/lib';
import runGame from '..';

const taskHeader = 'Amswer "yes" if number is prime, otherwise answer "no"';

const isNumPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0){
      return false;
    }
  }
  return true;
};

const task = () => {
  const num = getRand(1, 100);
  const answ = isNumPrime(num) ? 'yes' : 'no';

  return { quest: `${num}`, answ};
};

export default () => runGame(taskHeader, task);
