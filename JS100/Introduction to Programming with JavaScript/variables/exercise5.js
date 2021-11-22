// Variables - Exercise 5
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// This code prints 'bar' to the console because (a) the first declaration of foo is global scoped and b) the second declaration of foo is block scoped and does not exist globally.