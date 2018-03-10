const cons = (x, y) => msg => {
  switch (msg) {
    case 'car':
      return x;
    case 'cdr':
      return y;
  }
};

const car = pair => pair('car');
const cdr = pair => pair('cdr');

const calcPair = (pair, oper) => {
  switch (oper) {
    case '+':
      return car(pair) + cdr(pair);
    case '-':
      return car(pair) - cdr(pair);
    case '*':
      return car(pair) * cdr(pair);
  }
};

export { cons, car, cdr, calcPair };
