// Basics - Exercise 2
const n = 4936;
// Ones
const ones = n % 10; 
console.log(ones);
// Tens
const tens = (n - ones) / 10 % 10;
console.log(tens);
// Hundreds
const hundreds = (n tens) / 10 % 10;
console.log(hundreds);
// Thousands
const thousands = (n - hundreds) / 10 % 10;
console.log(thousands);
