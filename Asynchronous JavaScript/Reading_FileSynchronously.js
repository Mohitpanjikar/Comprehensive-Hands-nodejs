console.log("Reading file synchronously");

const fs = require('fs');

const data = fs.readFileSync('f1.txt');
console.log(data.toString());

console.log("Reading file synchronously Done");

//flow of code - synchronous code will run line by line and it can be slow
