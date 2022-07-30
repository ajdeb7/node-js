var fs = require("fs");

// Program doesn't wait for readFile function to finish before executing further code
fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");
