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

// Same as above but with callback function as a var parameter
callbackExample("Pablo Picasso", function(name){
    return "Hola " + name;
});

// same as above but with anonymous function or arrow function or lambda whatever
callbackExample("Astor Piazzola", (name) => {
    return "Hola " + name;
});

//More about arrow functions

const hello = () => {
   const es6 = 'ES6';
   return `Hello ${es6}`; 
};

const powers = [1,2,3,4,5].map(
    (number, index) => Math.pow(number,index));

const add = (n1,n2) => n1+n2;

const milesToKm = miles => miles * 1.60934;

log(hello());
log(powers);
log(add(100,100));
log(milesToKm(300));

//Array and object destruction

const getUser = () => {
return {
    name: 'John',
    surname: 'Doe',
    gender: 'male',
    address: {
    country: 'United States',
    city: 'California',
    postCode: 'CA',
    fullAddress: {
        doorNumber: 22,
        street: 'LA st'
    }
    },
    age: 29
}
};

const user = getUser();

// const name = user.name;
// const age = user.age;
const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

const { name, age, address : {country : theCountry } } = user;
const { address : { fullAddress : { doorNumber : number } } } = user;

log(name);
log(age);
log(country);
log(doorNumber);
  
//###################################

console.log("ES6 Classes");

function log(x){
    console.log(x);
}

class Animal {
    constructor(name, age){
        log(`${name} is an animal and he was born`);
        this.name = name;
        this.age = age;
    }


    static iAmAstaticMethod(){
        log(`I am a static method inside of an Animal class`);
    }

    eat(){
        log(`${this.name} is eating`);
    }

    sleep(){
        log(`${this.name} is sleeping`);
    }

    wakeUp(){
        log(`${this.name} is waking up`);
    }

    logAge(){
        log(`${this.name} is ${this.age} years old`);
    }

}

class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    logBreed() {
        log(`${this.name} is a ${this.breed}`);
      }

    logAgeFromDog(){
        super.logAge();
    }

}

class Cat extends Animal{
    constructor(name, age){
        super(name,age);
    }

    logAgeFromCat(){
        super.logAge();
    }

}

const rex = new Animal("Rex Rex", 12);

rex.eat();
rex.sleep();
rex.wakeUp();
rex.sleep();
rex.wakeUp();
rex.logAge();

log(`######################################`);

const lassie = new Animal("Lassie", 23);

lassie.eat();
lassie.sleep();
lassie.wakeUp();
lassie.sleep();
lassie.wakeUp();
lassie.logAge();

const july = new Dog("Rex Rex", 20);
july.logBreed();
july.logAgeFromDog();
july.eat();
july.sleep();
july.wakeUp();
july.sleep();
july.wakeUp();

const houdine = new Cat("Hon hon", 4);

houdine.logAgeFromCat();
houdine.eat();
houdine.sleep();
houdine.sleep();
houdine.sleep();
houdine.sleep();
houdine.sleep();
houdine.sleep();
houdine.sleep();
houdine.sleep();
houdine.sleep();
houdine.wakeUp();

console.log(`######################################`);
console.log(`Promisses`);

const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Jhon', 'Miles', 'Bill', 'Wes']);
    }, 3000);

    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 5000);
});

const surenamesPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(['Coltrane', 'Davis', 'Evans', 'Montegomery']);
    }, 3000);
    setTimeout(()=>{
        reject("no data back from the server, there was an error");
    }, 5000);
});

// promise.then(response => {
//     log(response);
// }).catch(error => {
//     log(error);
// });

Promise.all([namesPromise, surenamesPromise]).then(data => {
    const [names,surenames] = data; 
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const surname = surnames[i];
        console.log(`${name} ${surname}`);
    }
    
}).catch(error => {
    log(error);
});

