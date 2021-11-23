// Functions - Exercise 3
function mul(a, b) {
  return a * b;
}

function getNumber(prompt) {
const rlSync = require('readline-sync');
 return Number(rlSync.question('Enter the first number: '))
}

const num1 = getNumber('Enter the first number: ');
const num2 = getNumber('Enter the second number: ');

console.log(`${num1} * ${num2} = ${mul(num1, num2)}`);
