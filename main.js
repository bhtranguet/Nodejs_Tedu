var http = require('http');
var log = require('./log');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    if (request.url == '/') {
        response.write('<h1>This is Home Page</h1>');
    }

    if (request.url == '/admin') {
        response.write('<h1>This is Admin Page</h1>');
    }
    if (request.url == '/student') {
        response.write('<h1>This is Student Page</h1>');
    }
    response.end();
}).listen(8000);

log.info("Server running at http://localhost:8000");