
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
console.log("string length: ", x.length);

var s = "Sridhar";
s = "Sriman";
s[3] = "k" // strings are immutable
console.log(s);
var t = "";
for(var i=s.length-1; i>=0; i--) {
    t = t + s[i];
}
console.log("reversed string: , ", t);

var ob = ["Jacky", "Chan", 5.3, 30, 57, 200000]

// object literal
var ob1 = {
    firstname: "Jackie",
    lastname: "Chan",
    height: 5.3,
    weight: 59,
    salary: 2000000
}

console.log(ob1.firstname)
console.log(ob1["lastname"])
var k = "firstname"
console.log(ob1[k])

for(h in ob1) {
    console.log(h,": ", ob1[h])
}