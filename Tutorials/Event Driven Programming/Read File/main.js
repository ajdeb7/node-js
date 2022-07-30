var fs = require("fs");

// asyncronous readFile function, if an error occurs during the read operation,
// the err object will contain the corresponding error, else data will contain
// contents of the file. readFile passes err and data to the callback function
// after the read operation is complete, which prints the content.
fs.readFile('input.txt', function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");
