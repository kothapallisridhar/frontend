
function add(a, b, cfn) {
    if(isNaN(a) || isNaN(b)) {
        cfn("Given wrong input", null)
    } else {
        var z = a + b;
        cfn(null, z)
    }
}

add(10, 25, function(x, y) {
    if(x) {
        console.log(x)
    } else {
        console.log(y)
    }
})

add("hi", 10, function(x, y) {
    if(x) {
        console.log(x)
    } else {
        console.log(y)
    }
})