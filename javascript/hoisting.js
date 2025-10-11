//'use strict'
console.log(a);
var a = 100;

function abc() {
    //var a = 200;
    a = 333;
    console.log("inside function: a: ", a)
    var a = 200;
    //a = 200;
}
abc();
//b = 200;
console.log("outside a: ", a);
/*
hoisting
Running JavaScript code in two phases
    1. Creation phase
        Keeping all variables in memory before execution (hoisting)
        only declarations(not initializations)
    2. Execution phase
 */

    var ar = [33, 44, 55];
    var br = [];
    var cr = [];

    for(var i = 0; i <= ar.length-1; i++) {
        br.push(function() {console.log("hi", i)})
    }
    console.log(br);
    br[0]();
    br[1]();
    br[2]();

    ar.forEach(function(a, j) {
        cr.push(function() {console.log("HI", j)})
    })
    console.log(cr)
    cr[0]();
    cr[1]();
    cr[2]();

    // closure => binding outer function scope values to inner function under closure scope