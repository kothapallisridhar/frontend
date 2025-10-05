// function declaration
function sum(a,b) {
    return a + b;
}

// function expression // function literals
var add = function(a,b) {
    return a + b;
}
var res = add(2,5);


// Immediately Invoked Function Expression
// IIFE // self executable function
(function() {
    console.log("IIFE")
})()

