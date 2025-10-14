/*
var a = 200;
var a = 555;

console.log(b)

let b = 555;
{
    let b = 777;
}
*/

/*
var a = 100;
let b = 200;

console.log('c: ', c);
console.log('d: ', d);
if(10<4)
{
    var c = 300;
    let d = 555;
}
*/

var students = ['Ioana', 'Suzanne', 'Lucky', 'Stephane', 'Denise']
/*
for(let i=0; i<=students.length-1; i++) {
    var nbt = document.createElement('button')
    nbt.innerText = students[i]
    nbt.style.margin = '10px'
    nbt.onclick = function(e) {console.log('Hello ', e.target.innerText, 'index: ', i)}
    document.getElementById('d2').appendChild(nbt)
}*/

/*
students.forEach(function(v, i){
    var nbt = document.createElement('button')
    nbt.innerText = students[i]
    nbt.style.margin = '10px'
    nbt.onclick = function() {console.log('Hello ', v, 'index: ', i)}
    document.getElementById('d2').appendChild(nbt)
})*/
/*
const x = 100; // 'const' delcarations must be initialized

console.log(x)

const ar = [10, 20, 59, 12, 14, 15]

ar[3] = 55
console.log(ar)
*/
var br = [11, 22, 33, 19, 38]
Object.freeze(br)

//br[2] = 50;
//br.push('Ravi')
//Object.seal(br)
//br[2] = 70;
//br = 100;
//br[2] = 100;

br = [...br, 'sri']
br.push('srk')
console.log(br)


