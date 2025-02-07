//used to get current infromation about your system 
const os = require('os');

console.log(os.type()); //operating system
console.log(os.arch()); //32 bit or 64 bit
console.log(os.homedir()); //home directory
console.log(os.networkInterfaces());    //network interfaces
console.log(os.cpus()); //cpu information

console.log(os.totalmem()); //total memory
console.log(os.freemem()); //free memory
console.log(os.totalmem() - os.freemem()); //used memory