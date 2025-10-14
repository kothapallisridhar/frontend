console.log('destructuring')

var ar = ['Lucky', 'Denise', 'Ioana', 'Suzanne', 'Stephane']

var [x, y, , r] = ar
console.log(x, y, r)

var student = {
    firstname: 'Sridahr',
    lastname: 'Kothapalli',
    age: 45,
    gender: 'male',
    id: 555,
    address: {
        country: 'Germany', 
        city: 'Munich',
        zip: '777AG'
    }
}

var {firstname, address:{city, zip: pincode}} = student
console.log(firstname, city, pincode)

var a = 55;
var b = 77;

[b, a] = [a, b]
console.log(a, b)

function abc({lastname}) {
    console.log(lastname)
}
abc(student)

var ob1 = {
    firstname: 'Lucky',
    gender: 'female'
}

var ob2 = {
    place: 'Berlin',
    zip: '555AM'
}

Object.freeze(ob1)
Object.freeze(ob2)
ob2 = {...ob2, country: 'Germany'}
var ob3 = {...ob1, ...ob2}
console.log(ob3)
/*
var ar = [12, 14]
var br = [15, 17]
ar = [...ar, 33]

var cr = [...ar, ...br]
console.log(cr)

console.log(ar)
console.log(...ar)
*/

var ar = [12,14, 15, 16, 17, 19, 22, 23, 24, 25]

var [a, b, ...c] = ar; // ...c => rest variable
console.log(a, b, c)

delete ar[1]
console.log(ar)

var ob4 = {
    firstname: 'Ioana',
    lastname: 'Grace',
    gender: 'female',
    thumbnail: 'https://randomuser.me/api/portraits/women/29.jpg',
    age: 30,
    country: 'Romania'
}
Object.freeze(ob4)
//delete ob4.thumbnail;
var {thumbnail, ...ob5} = ob4;
console.log(ob5)

function add(a, b, ...c) {
    console.log(a,b,c);
}

add(10, 20)
add(10, 20, 30)
add(10, 20, 40, 50)


