const net = require('net');
var server = net.createServer(socket => {
    socket.end('goodbye! \n');
}).on('error', err => {throw err});
server.listen(() => {
    var address = server.address();
    console.log("Opened server on %j", address);
})