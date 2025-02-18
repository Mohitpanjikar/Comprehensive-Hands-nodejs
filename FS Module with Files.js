const fs = require('fs');

//reading a file - 
let fileContent = fs.readFileSync('text_file/t1.txt');
console.log(fileContent);   //prints the content of the file in the form of buffer
console.log('Data of file is ' + fileContent);  //prints the content of the file in the form of string format

//writing in a file - 
fs.writeFileSync('text_file/t2.txt', 'Hello from t2.txt ');

//appending in a file -
fs.appendFileSync('text_file/t2.txt', 'appending opertion in t2.txt');

//deleting a file -
fs.unlinkSync('text_file/t2.txt');