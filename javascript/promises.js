
var http = new XMLHttpRequest();
console.log(http)
http.open('get', 'https://fakestoreapi.com/products')
http.send()
console.log(http.responseText)
http.onloadend = function() {
    console.log('on load end', http.responseText);
}
console.log('Hello');