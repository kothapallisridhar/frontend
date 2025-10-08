
var ar = [10, 20, 38, 19, 59]

console.log(ar)

ar.push(33);
console.log(ar)

ar.unshift(5);
console.log(ar)

ar.pop();
console.log(ar);

ar.shift();
console.log(ar)

ar.splice(3,2,'sri','cars');
console.log(ar)
ar.splice(3,0,'hi')
console.log(ar)

ar.forEach(function(v, i) {
    console.log("i: ", i, " val: ", v)
})