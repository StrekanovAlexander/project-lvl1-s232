import { getRand } from '../other/lib';
import { cons, car, cdr, calcPair } from '../other/pair';

const taskHeader = 'What is the result of expression\n';
const arrOper = ['+', '-', '*'];

const task = () => {
  const pair = cons(getRand(1, 10), getRand(1, 10));
  const oper = arrOper[getRand(0, 3)];
  const answ = String(calcPair(pair, oper));
  return { quest: `${car(pair)} ${oper} ${cdr(pair)}`, answ };
};

export { taskHeader, task }
