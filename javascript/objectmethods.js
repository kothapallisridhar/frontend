var ob1 = {
    firstname: "Sridhar",
    lastname: "Kothapalli",
    age: 44,
    place: "Munich"
}

//Object.freeze(ob1); // can't change the property of object
Object.seal(ob1); // can change the object's property but can't modify the object
ob1.age = 45;
ob1.gender = "male"
console.log(ob1)

var k = Object.keys(ob1);
console.log(k)

var v = Object.values(ob1);
console.log(v)

var ar = [11, 20, 22, 48]
console.dir(ar)

console.dir(document)

var c = document.createElement('h1');
console.log(c);
c.innerText = "Welcome to JavaScript";
// c.style.color = 'red';
// c.style.border = '2px solid blue';
// c.style.fontSize = '46px';
// c.style.backgroundColor = 'skyblue'
document.body.appendChild(c);
console.log(c)

var iel = document.createElement('i')
iel.innerText = "This is India"

var y = document.getElementById("d1");
console.log(y);
y.appendChild(iel)