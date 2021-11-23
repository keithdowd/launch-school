// Functions - Exercise 2
function getName(prompt) {
  let rlSync = require('readline-sync');
  const name = rlSync.question(prompt);
  return name;
}

const firstName = getName('What is your first name? ');
const lastName = getName('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);