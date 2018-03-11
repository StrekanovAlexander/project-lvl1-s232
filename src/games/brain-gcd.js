import { getRand } from '../other/lib';
import runGame from '..';

const taskHeader = 'Find the greatest common divisor of given numbers.\n';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const task = () => {
  const val1 = getRand(1, 10);
  const val2 = getRand(1, 10);
  const result = getGcd(val1, val2);
  const answ = String(result);
  return { quest: `${val1}  ${val2}`, answ };
};

export default () => runGame(taskHeader, task);
