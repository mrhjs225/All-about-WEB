console.log(1+1);
console.log("1+1");
console.log('1'+'1');
console.log('1+1');
console.log(2+'1');
console.log('helloworld'.length+1);

var a = 1
console.log(a);
// comment
var name = "jason"
console.log('line '+name+'\nspace');
console.log(`line ${name}
space`);
console.log(false);
//true=1;
console.log(1>2);
console.log(1==1);

var a1 = 2;
var a2 = 2;
if (a1>a2) {
    console.log('a1 is bigger than a2');
} else if (a1<a2) {
    console.log('a2 is bigger than a1');
} else {
    console.log('a1 and a2 is same');
}

var args = process.argv;
console.log(args);
console.log(args[2]);
console.log(args[4]=='1');
console.log(1=='1');
console.log(1==='1');

var i = 0;
while(i < 2) {
    console.log('hello world!');
    i++;
    // i = i + 1;
}
var arr = ['a', '130', false, 130];
console.log(arr[2]);
console.log(arr[1] == arr[3]);
console.log(arr[1] === arr[3]);
arr.push('E');
console.log(arr);
console.log(arr.pop());
console.log(arr);
delete arr[2];
console.log(arr);
console.log(arr.length);

a = 3;
b = 4;
function f123(arg1, arg2){
    var temp = arg1+arg2;
    console.log('sum is '+ temp);
    return arg1-arg2;
}

console.log('subtraction is ' + f123(a, b));