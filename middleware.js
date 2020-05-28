var express = require('express');

var app = express();

// Middleware xử lý nằm giữa req vs res
app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.url);
    next();
})

// chạy xong middleware mới vào đến xử lý request
app.get('/', function(req, res) {
    res.statusCode = 200;
    res.send('Welcom Tedu');
    res.end();
})

app.get('/help', function(req, res) {
    res.send('This is help page');
    res.end();  
})

var server = app.listen(8000, function() {
    console.log('server is running');
})