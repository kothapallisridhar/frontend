/*
var http = new XMLHttpRequest();
console.log(http.responseText)
console.log(http)
http.open('get', 'https://fakestoreapi.com/products')
http.send()
console.log(http.responseText)
console.log(http.responseText)
http.onloadend = function() {
    console.log('on load end: ', http.responseText);
}
console.log('Hello');
*/

var p = fetch('https://restcountries.com/v3.1/name/deutschland')
            .then(function() {
                console.log("success")
            })
            .catch(function() {
                console.log('check the input or request details')
            })
console.log(p);