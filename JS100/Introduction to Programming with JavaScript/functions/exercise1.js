// Functions - Exercise 1
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*

This code logs:
= 1

This is because the variable bar at line 2 is initialized in the global scope.
The second bar at line 4 is initialized in the local scope of the foo() function.
When the function terminates the locally scoped bar is deleted.
Thus when console.log() passes bar it passes the globally scoped bar which is equal to 1.

*/