// Functions - Exercise 4
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/*

This code doesn't print anything to the console.
This is because scream() returns before console.log() is called within the function body.

*/