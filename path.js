var path = require('path');
console.log('normalization: ' + path.normalize('/asset//image//trang.jpg'));
console.log('join: ' + path.join('asset', 'nodejs/newfolder'));
console.log('resolve: ' + path.resolve('asset//image/trang.jpg'));
console.log('extname: ' + path.extname('asset//image/trang.jpg'));