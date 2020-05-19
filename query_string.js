var queryString = require('querystring');
const obj = queryString.parse('name=ferret&age=19');
console.log(obj.name);
var decode = queryString.decode('https://www.facebook.com/TH%C3%81NH-%C4%90%E1%BB%A8C-CH%C3%9AA-TR%E1%BB%9CI-193254684731838/');
console.log(decode);