/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Title')
/* coding examples */

//Those are all collections(arrays) methods:

//Map means transform one thing in other thing
var map = [1,2,3,4,5].map(function(n) {
    return n * 2;
});

log("[].map");
//Map is now an array of all elements * 2:
log(map);

//Filter means filter (LOL) - filtra um valor
// de acordo com a função passada por parâmetro
log("[].filter");
var filter = [1,2,3,4,5].filter(function(n){
    return n % 2 == 0;
});

//Filter is now an array with only even numbers
log(filter);

//Reduce returns a single value based on the two
//parameters passed in the function inside the example:
log("[].reduce");
var reduce = [1,2,3,4,5].reduce(function(accumulator, current){
    return accumulator + current
});

//reduce accumulates = n + [n]-1
log (reduce);


//Callbacks
//simplesmente quando você passa uma função por
//parâmetro dentro de outra função
//Similar ao comportamento da Stream API do Java

//Define a function that receives another function as second parameter
function callbackExample(name, callback){
    log(callback(name));
}
//The definition of the call back function
var callback = function(name){
    return "Hola " + name;
}
// The calling of the callbackExample within the callback function in parameter
callbackExample("Pablo Picasso", function(name){
    return "Hola " + name;
});
// same as above but with anonymous function or arrow function or lambda whatever
callbackExample("Astor Piazzola", (name) => {
    return "Hola " + name;
});