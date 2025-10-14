console.log('template strings')
/*
var a = +prompt()
var b = +prompt()

console.log(`the addition of ${a} and ${b} is ${a + b}`);
*/
var mstr = `Hello, Sridhar!
Good Morning!!`

var pattern = `    *
  * * *
* * * * *`

console.log(mstr);  
console.log(pattern)  
var skill = 'Frontend';
var technology = 'React';

var student = {
    firstname: 'Ioana',
    lastname: 'Buboiu',
    age: 30,
    city: 'Bucharest',
    country: 'Romania',
    skill,
    technology
}

console.log(student)

function add(a=35, b=9, c=7) {
    return a+b+c
}
console.log(add(10, 20, 30))
console.log(add(10, 20))

var ar = [10, 20, 5]
var [a, b, c, d, e] = ar;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
