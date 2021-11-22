// Variables - Exercise 6
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// No error will result from this code and 'bar' will be output. This is because the second declaration of FOO is blocked scope and does not reference the first declaration fo FOO which is globally scoped.