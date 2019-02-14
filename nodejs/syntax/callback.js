// function a() {
//     console.log('A');
// }
var a = function() {
    console.log('A');
}

console.log(a);
a();

function slowfunc(callback) {
callback();
}
slowfunc(a);