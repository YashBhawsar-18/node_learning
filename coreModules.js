// const myFile = require('fs');
console.log("Node JS Core Modules"); // this is a global module and we can use it without importing it

// myFile.writeFileSync("coreModules.txt", "This is my first file created using node js core modules");

//  alternate method to use non-global modules
const myFile = require('fs').writeFileSync;
// in this method we are directly using the writeFileSync method of the fs module without storing the entire module in a variable.

myFile("coreModules2.txt", "This is my second file created using node js core modules using alternate method");
