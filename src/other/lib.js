const getRand = (min, max) => Math.floor((Math.random() * max) + min);
const isNumEven = num => num % 2 === 0 ? true : false;

export { getRand, isNumEven };
