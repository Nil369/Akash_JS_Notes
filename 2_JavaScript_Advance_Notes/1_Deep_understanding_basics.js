/* Hi I'm Akash Halder 

I have written this code for Revision purpose & well other can also use this source code
to revise & learn from it

*/


// ==============================   1. Difference between var, const, let || browser context api, stack, heap, Window object in JS ✅   ==============================

/*JS me kahi sare features hai par kuch features jo hum use karte hai wo js mein nahi hai. Lekin hum phir bhi use karpate 
hai kyuki wo features Js use karta hai window se. Aur Window => box of features given by browser to use with js
*/ 

console.log(window) // print all the features given by browser to use in JS => setTimeout, setInterval

// var old js me tha 
//var function scoped hota hai => var apne parent function me kahi bhi use ho sakta hai
var a = 12;
console.log(window)
// var add itself to the window object

// let const new js me hai
//let const braces scoped hota hai 
let b = 69;
console.log(window)
//let does not add itself to  the window object

/* stack -> code me var , function => func me variables, diff data jis order me run hoga uska ek ek segment banata ha or segment ke bunch ko hum stack kehte hai
            Or code jis order me run hota hai stack se us hi order me claer ho jata hai

    heap memonry-> Jitne bhi variables, data or calculation JS k dwara kiya jata hai wo value kahi to store hoti hai. Us memory ko hum heap kehte hai
        Ex:  1+2+3+4+5+6 = 21 =>Human mind calculation 
            1+2=3 || clear  => 3+3= 6 || clear  => 6+4 .......Then final result is printed => This samll data that are being stored in heap memeory.
*/


// ======================================   2. Execution Context & Lexical Environment ✅  ========================================================

/* execution context is a container where the functions code is executed & it's created whenever a function is called.
It contains 3 things: 1) variables      2) functions        3) Lexical Environment(L.E)
Lexical Environment=> Ek Chart hai jisme  ye likha hota hai ki humara ek particular function ki cheezo ko access kar sakta hai & kinko nahi.                                                                     
*/

function abcd(){
    var a = 12; // here var b can't be used due to L.E

    function def(){ // var b has cope upto its parent
        var b = 69 
    }
}
abcd()


// =============================    3. How to copy reference value in JS ? ✅ ================================

var a =[1,2,3,4,5,6,7,8,9,10];
var c = [...a] //spread operator


// =============================    4. Truthy & Falsy Value ✅  =======================================

/* Js me kuch bhi likho wo hamesha 2 hi category me ata hai truthy & falsy.
falsy value  = 0 , false, undefined, NaN, docment.all , null
Values other than falsy values are truthy values
*/

if(7){
    console.log("Hey")
}
else{
    console.log("I'm else as a falsy value is entered")
}


// ====================================   5. Call back function ✅   ==================================

/*Aisa code jo bad me chalta hai use hum ek function dete hai.... jab wo complete ho jaye tab
ye function chala dena, aur wo func jo hum dete hai wo ek normal func hota hai or use hum 
call back function kehte hai 
*/

// Simulating an asynchronous operation

setTimeout(function() {
    const data = "Some data";
    callback(data);
  }, 2000);


// =================================== 6. First Class function ✅  =====================================

/* JS mein ek function jisko hum as a value use kar sakte hai use hum 1st class function kehte hai
var val = function(){} */

function abcd(hi){
    hi(); 
}
abcd(function(){console.log("hey");})


// =================================== 7. Arrow functions ✅  ===============================================

//arrow functions bascically  ek shortcut hai functions ko likhne ka

// *******Example: ********

// Aam Zindagi:

var AamZindagi = function(){
    console.log("Ye hai boring Aam Zindagi");
}
AamZindagi();

// Mentoz Zindagi => Arrow function 🤣

// ex1:
var MentozZindagi = ()=> "Ye hai Mentoz zindagi"; MentozZindagi();

// ex2:
setTimeout(() => {
    console.log("Ye bhi hai mentoz zindagi");
}, 2000);

