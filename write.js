var fs = require('fs');
var data = 'bhtrang dz';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'UTF8');
writeStream.end();
writeStream.on('finish', () => {
    console.log('Write complete!');
})