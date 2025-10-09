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