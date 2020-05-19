var express = require('express');
var app = express();
app.get('/', (req, res)=> {
    var name = req.param('name');
    res.send(name);
})

var server = app.listen(8000, () => {
    console.log('Server is running at ' + server.address().port);
})