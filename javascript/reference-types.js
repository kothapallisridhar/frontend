
var ar = [10, 20];
var br = [10, 20]
// heap memory
console.log(ar == br); // array is reference(non-primitive) data type
var cr = ar;
console.log(ar == cr);


var a = 10;
var b = 10;
console.log(a==b); // constant pool (primitive types)

var x = "sai";
var y = "sai";
console.log(x == y); // string is value(primitive) data type

console.log("array length: ", ar.length);
console.log("string length: ", x.length)