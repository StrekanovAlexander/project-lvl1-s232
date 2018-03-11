import { getRand } from '../other/lib';

const taskHeader = 'Balance the given number\n';

const getBalance = (num) => {
  const arr = String(num).split('').sort().map(Number);
  const arrLen = arr.length - 1;
  if (arrLen > 0) {
    while ((arr[arrLen] - arr[0]) > 1) {
      for (let i = 0; i <= arrLen - 1; i += 1) {
        if (arr[i + 1] >= arr[i]) {
          if (arr[i + 1] - arr[i] >= 1) {
            arr[i] += 1;
            arr[i + 1] -= 1;
          }
        }
      }
      arr.sort();
    }
  }
  return arr.join('');
};

const task = () => {
  const num = getRand(1, 100);
  const answ = String(getBalance(num));
  return { quest: `${num}`, answ };
};

export { taskHeader, task }
