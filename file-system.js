var fs = require('fs');
var http = require('http');

// http.createServer(function (req, res) {
//     // Read file
//     fs.readFile('demoHTML.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8000);


// fs.appendFile('myTextFile.txt', 'Hello Content', function (err) {
//     if (err) throw err;
//     console.log("File is Save");
// })

fs.open('myTextFile2', 'w', function (err, file) {
    if (err) throw err;
    console.log('Save');
    console.log(file);  
})

console.log("Server running at http://localhost:8000");