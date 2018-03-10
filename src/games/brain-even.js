import { getRand, isNumEven } from '../other/lib';

const taskHeader = 'Answer "yes" if number even otherwise answer "no".\n';

const task = () => {
  const num = getRand(1, 100);
  const answ = isNumEven(num) ? 'yes' : 'no';

  return { quest: `${num}`, answ};
};

export { taskHeader, task }
