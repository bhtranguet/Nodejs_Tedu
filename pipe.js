var fs = require('fs');

var readStream = fs.createReadStream('demoHTML.html');

var writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

console.log('Program end!');