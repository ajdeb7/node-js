var fs = require("fs");

// readFileSync function finishes reading file before executing further lines of code
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
