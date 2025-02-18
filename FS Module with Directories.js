const fs = require('fs');

//creating a Directory -
// fs.mkdirSync('example_text_file');

// Checking the content inside of a Directory
const path = '/Users/mohitpanjikar/Desktop/Nodejs';
const files = fs.readdirSync(path);
console.log(files);

//to check if Direcotries exist or not
const check = fs.existsSync('/Users/mohitpanjikar/Desktop/Nodejs');
console.log(check);

//Deleting a Directory
fs.rmdirSync('example_text_file');