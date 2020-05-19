var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/cookie', (req, res) => {
    res.cookie('cookie_name', 'cookie_name');
    res.send('Cookie is set');
})

app.get('/', (req, res) => {
    res.send(req.cookies);
    res.end();
})

var server = app.listen(8000, () => {
    console.log('server is running at ' + server.address().port);
})