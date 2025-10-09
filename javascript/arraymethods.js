
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
var dr = [10, 30, 40, 23, 22, 9, 11]
dr.forEach(function(v, i) {
    console.log("i: ", i, " val: ", v)
})

dr.reverse().forEach(function(v) {
    console.log(v);
})

dr.toReversed().forEach(function(val, ind, c) {
    console.log(ind, val)
})

console.log(dr)

var x = dr.forEach(function(val, ind) { // forEach don't return anything
    console.log(val)
})
console.log(x)

var y = dr.map(function(val, ind) { // map returns an array
    return val * 2;
})
console.log(y)