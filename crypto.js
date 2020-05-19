const crypto = require('crypto');
const secret = 'abcd';
const hash = crypto.createHmac('sha256', secret).update('Welcome Tedu').digest('hex');
console.log(hash);