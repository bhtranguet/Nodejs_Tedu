var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.cookie('sample', 'Test res cookie');
    res.send('This is example');
    res.end();
})

app.post('/process_post', urlencodedParser, (req, res) => {
    var response = {
        name: req.body.name,
        age: req.body.age
    }
    console.log(response);
    res.send(JSON.stringify(response));
})

var server = app.listen(8000, () => {
    console.log('Server is running at: ' + server.address().port);
})