import readlineSync from 'readline-sync';

const getAnswer = (quest) => readlineSync.question(quest);

export { getAnswer };
