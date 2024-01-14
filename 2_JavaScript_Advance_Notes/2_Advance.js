
/*==========================================================================  1.Higher Order Functions ✅  ===================================================================

 These are functions that take other functions as arguments, return them as results, or both.

    //Aisa function jo accept karle ek aur func ya return karde ek aur func => forEach Mehod iska use karta hai
*/

//Examples : 

var arr = [1,2,3,4,5,6];
arr.forEach(function(){}) //Higher Order Function

function higherOrderFunc(func) {
    return func(10, 20);
}

function add(a, b) {
    return a + b;
}

function abcd(){

}
abcd(function(){}); // Higher Order function

console.log(higherOrderFunc(add)); // Output: 30



/*=============================================================   2. Constructor Functions ✅ ==============================================================================

 Constructor functions are special functions that are used to initialize an object. They define the properties and methods that an object should have.

    // normal function jisme this ka istemal ho and function ko call karte waqt new keyword ka istemal karein
    //Use: New song => kuch chize same hongi like -> Singer name, lyricist, song pic => Inko ek function me dal kar -> new keyword ka use karke bar bar use kar paye 
*/

//Examples:

function modelofbiscuit(){
    this.width = 12;
    this.height = 22;
    this.color = "brown";
    this.taste = "sugary";
}

var bis = new modelofbiscuit();
var bis1 = new modelofbiscuit();
var bis2 = new modelofbiscuit();


function Car(model, year) {
    this.model = model;
    this.year = year;
}

new Car('Tesla', '2020');
console.log(Car); // Output: Car { model: 'Tesla', year: '2020' }




/*===============================================================   3. First Class Functions ✅ ====================================================================================

First Class Functions are functions that can be treated like any other variable. They can be assigned to variables, passed as arguments, and returned from other functions.
*/

//Examples:

function firstClassFunction() {
    console.log('This is a first class function');
}

let functionVar = firstClassFunction;
functionVar(); // Output: This is a first class function


setTimeout(function(){})


/*===============================================================  4. New Keyword ✅  ===============================================================  

The new keyword is used to create an instance of a user-defined object type or of one of the built-in object types.
*/

function Car(model, year) {
    this.model = model;
    this.year = year;
}

let car1 = new Car('Tesla', '2020');
console.log(car1); // Output: Car { model: 'Tesla', year: '2020' }


/*===============================================================  5. IIFE (Immediately Invoked Function Expression) ✅ ===============================================================  


 IIFE is a JavaScript function that runs as soon as it is defined. It can be named or anonymous.
 iife hai function ko turant chalane ki kala, is tareeke se ki humlog koi variable bana paye
*/

(function() {
    console.log('This is an IIFE');
})(); // Output: This is an IIFE


var a = (function(){
    var privateval = 12;

    return{
        getter: function(){
            console.log(privateval);
        },
        setter: function(val){
            privateval = val;
        }
    }
})() // in console type => a.getter() ; a.setter(24) , a.getter()


/*===============================================================  6. Prototype ✅ ===============================================================  

Every object in JavaScript is linked with a prototype. A prototype is an object that provides default behavior and properties.
*/

var obj_1= {
    name: "akash"
}
console.log(obj)

let carrr1 = new Car('Tesla', '2020');
carrr1.display(); // Output: Tesla 2020


/* ===============================================================  7. Prototypal Inheritance ✅ ===============================================================  

 In JavaScript, objects can inherit properties and methods from other objects. This is known as prototypal inheritance.
*/

// Examples: 

var human ={
    canFly : false,
    canWalk : true,
    canTalk : true,
    canDance : true,
    canHaveFourLegs : false,
}

var akash ={
    canmakeAmazingwebsites: true,
    canmakeAmazinganimations: true,
    canmakeAwardedWebsites: true,
}
akash.__proto__ = human ;

/*function Car(model, year) {
    this.model = model;
    this.year = year;
}

Car.prototype.display = function() {
    console.log(`${this.model} ${this.year}`);
}

function ElectricCar(model, year, range) {
    Car.call(this, model, year);
    this.range = range;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

let electricCar1 = new ElectricCar('Tesla', '2020', '400 miles');
electricCar1.display(); // Output: Tesla 2020*/


/*=============================================================== ✨✨ 8. This, Call, Apply, Bind ✅ ====================================================================================================  

In JavaScript, 'this' keyword is a special variable that is used in functions and object methods. 'Call', 'Apply', and 'Bind' methods are used to manipulate the 'this' value.

//This:
jab bhi koi cheez {} ke andar na ho to use hum global scope kehte hai => var abc = "aakash"
ek function jo obj ke andar ho to use hum method kehte hai => var obj = {name:"Rohan"; jsseekho:function(){console.log(this)}} obj.jsseekho()
global =>window
function => window
method => obj

call apply bind => agar humare  pass koi bhi function hai & koi bhi obj hai & by default jo this ki value window hai use window na rakh kar point karwana hai kisi obj ki taraf
*/
//this keyword=> evernt listner
var btn = document.querySelector("button") 
btn.addEventListener("click", function(){console.log(this)})

function greet(val, val2, val3) {
    console.log(`Hello, ${this.name}, val, val2,val3`);
}

let person = {
    name: 'John Doe'
};
let obj_2 = {
    age: "24"
}

greet.call(person); // Output: Hello, John Doe //call in js
greet.apply(person,[0,1,2,3]); // Output: Hello, John Doe //call in js

//bind =>
var bindedFunction = greet.bind(obj_2);
bindedFunction();




/*===============================================================  9. Pure and Impure Functions ✅ ================================================================================================================================  

A pure function is a function that has no side effects and always produces the same output for the same input. An impure function is a function that can have side effects and may produce different outputs for the same input.
*/

function add(a, b) {
    return a + b;
}

function impureAdd(a, b) {
    this.sum = a + b;
}

console.log(add(10, 20)); // Output: 30
let obj = { sum: 0 };
impureAdd.call(obj, 10, 20);
console.log(obj.sum); // Output: 30
