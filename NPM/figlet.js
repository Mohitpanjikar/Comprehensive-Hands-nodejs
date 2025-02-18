//figlet - help you to draw Ascii char in your terminal

const figlet = require('figlet');

figlet('Hello Mohit', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});