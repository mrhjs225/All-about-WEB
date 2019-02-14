var fs = require('fs');

// readFileSync

// console.log('A');
// var result = fs.readFileSync('syntax/sample2.txt', 'utf8');
// console.log(result);
// console.log('C');


console.log('A');
fs.readFile('syntax/sample2.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
console.log('C');
console.log('C');
console.log('C');
