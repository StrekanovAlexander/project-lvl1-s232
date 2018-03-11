import { getRand } from '../other/lib';
import runGame from '..';

const taskHeader = 'What number is missing in this progression?';

const task = () => {
  const limit = 10;
  const start = getRand(0, 10);
  const step = getRand(1, 10);
  const misIndex = getRand(1, 9);
  const arr = [];
  for (let i = 0; i < limit; i += 1){
    arr.push(i + start + step);
  }
  const answ = String(arr[misIndex]);
  arr[misIndex] = '..';

  return { quest: `${arr.join(' ')}`, answ };
};


export default () => runGame(taskHeader, task);
