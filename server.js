var express = require('express');
var app = express();
var multer = require('multer');

// server static file
app.use('/public', express.static('public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/'));
// cấu hình vị trí lưu file
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/uploads');
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
})

var upload = multer({storage: storage}).single('myfile');

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/index.html');
})

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.end('Error: ' + err);
        }
        res.end('File is uploaded');
    })
})

var server = app.listen(8000, () => {
    console.log('Server is running at: ' + server.address().port);
})