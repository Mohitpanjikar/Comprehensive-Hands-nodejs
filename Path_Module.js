const path = require('path');

// we need to extract the extension of the file -
let ext1 = path.extname('/Users/mohitpanjikar/Desktop/Nodejs/sample.txt');
let ext2 = path.extname('/Users/mohitpanjikar/Desktop/Nodejs/Path_Module.js');

//basename - 
let base1 = path.basename('/Users/mohitpanjikar/Desktop/Nodejs/sample.txt');
let base2 = path.basename('/Users/mohitpanjikar/Desktop/Nodejs/Path_Module.js');

console.log("The extension of the file is : " + ext1);
console.log("The extension of the file is : " + ext2);

console.log(base1);
console.log(base2);