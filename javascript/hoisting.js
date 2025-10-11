//'use strict'
console.log(a);
var a = 100;

function abc() {
    var a = 200;
    console.log("a: ", a)
}
abc();
//b = 200;
console.log(a);
/*
hoisting
Running JavaScript code in two phases
    1. Creation phase
        Keeping all variables in memory before execution (hoisting)
        only declarations(not initializations)
    2. Execution phase
 */