const net = require('net');
const client = net.connect({port: 59964}, () => {
    console.log('conneted to server!');
})
client.on('data', data => {
    console.log(data.toString());
    client.end();
})
client.on('end', () => {
    console.log('disconnected from server!');
})