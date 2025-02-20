const fs = require('fs');

console.log("Serial Execution of Async code");

fs.readFile('f1.txt', cb1);

function cb1(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.toString());
    console.log("Reading file asynchronously Done");

    fs.readFile('f2.txt', cb2);
} 
function cb2(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.toString());
    console.log("Reading file asynchronously Done");
} 