import { getRand } from '../other/lib';
import runGame from '..';

const taskHeader = 'Find the greatest common divisor of given numbers.\n';

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

const task = () => {
  const val1 = getRand(1, 10);
  const val2 = getRand(1, 10);
  const result = getResult(getArr(val1), getArr(val2));
  const answ = String(result);
  return { quest: `${val1}  ${val2}`, answ };
};

export default () => runGame(taskHeader, task);
