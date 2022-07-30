var fs = require("fs");

// readFile function doesn't wait for file to finish being read before executing further lines of code
fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");
