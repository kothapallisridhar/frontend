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
var x = document.getElementsByTagName("h1");
console.log(x);
x[0].style.color='red'
for(var i = 0; i<x.length; i++) {
    x[i].style.color='red'
}

var y = document.getElementsByTagName("h2");
for(var j=0; j<y.length; j++) {
    y[j].style.color='blue'
}

var z = document.getElementsByClassName("abc");
console.log(z);
for(var h=0; h<z.length; h++) {
    z[h].style.backgroundColor="lightgreen";
}

var d = document.querySelectorAll("h1");
console.log(d);
for(var k=0; k<d.length; k++) {
    d[k].style.color='orange'
}