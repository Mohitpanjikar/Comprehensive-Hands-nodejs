const fs = require('fs');

console.log("first line");

//reading file asynchronously -
fs.readFile('f1.txt', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.toString());
    console.log("Reading file asynchronously Done");
});

console.log("last line");

//reading the file Asynchronously - 
// flow of code - asynchronous code will run line by line and it can be fast