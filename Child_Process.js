//child process is a node module used to create sub process within a script
// you can perfrom diffrent tasks with your script by just using some methods

const cp = require('child_process');

// Open YouTube in Google Chrome
cp.execSync('open -a "Brave Browser" https://www.youtube.com');
cp.execSync('open -a "Chrome" https://www.youtube.com');