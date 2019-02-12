var fs = require('fs');
fs.readFile('syntax/sample.txt', 'utf8',function(err, data){
    console.log(data);
});