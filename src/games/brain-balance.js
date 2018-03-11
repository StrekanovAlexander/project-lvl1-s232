import { getRand } from '../other/lib';
import runGame from '..';

const taskHeader = 'Balance the given number\n';

const getBalance = (arr) => {
   arr.sort();
   if (arr[arr.length - 1] - arr[0] <= 1) {
       return arr;
   }
   arr[0] += 1;
   arr[arr.length - 1] -= 1;
   return getBalance(arr);
};

const task = () => {
  const num = getRand(1, 100);
  const arr = String(num).split('').sort().map(Number);
  const result = getBalance(arr).join('');
  const answ = String(result);
  return { quest: `${num}`, answ };
};

export default () => runGame(taskHeader, task);
