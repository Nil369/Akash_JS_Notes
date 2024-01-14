/* Hi I'm Akash Halder 

I have written this code for Revision purpose & well other can also use this source code
to revise & learn from it

*/


//1. =================================================== WORD VS KEYWORDS: ✅ ======================================================

// Akash --Word                                             for --keyword
// is --                                                    if --keyword
// a -- Word                                                else --keyword
// good -- Word                                             var --Keyword
// boy -- Word                                              let --keyword
//--Word are those which doesnot have meaning in JS         Keyword are those which are reserved in JS & has its own meaning



//  2. ============================================= Print function in JS ✅ ========================================================

// a) Ways to print in JavaScript
console.log("Hello World");
alert("me");
document.write("this is document write")

// b). Javascript console API
console.log("Hello World", 4 + 6, "Another log");
console.warn("this is warning");
console.error("This is an error"); 


//3. ==================================================== var let const: ✅ ===========================================================

//      variables & constants
//      code me koi bhi data store karne k liye use hota hai variable -- Variables data can be changed
//      Constants data can't be changed
var num1 = 50;
var num2 = 50;
 console.log(num1+num2);

// Data types in JavaScript: 

// a) Numbers
var num1 = 455;
var num2 = 56.76;

// b) String
var str1 = "This is a string";
var str2 = 'This is also a string';

//c) Objects
var marks = {
    ravi: 34, //property
    shubham: 78,
    akash: 99.977,
    kuchkaho: function(){} //methods=>function
}
console.log(marks);
// marks.akash = "100%" // property changed

// ek se zyada bando ki bat ho rahi ho to wo hai array || Agar Ek bande ke bare me saare details ko jo hold kare in a key value pair => Objects

//d) Booleans
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);


// 3. ================= hoisting-- variables and functions are hoisted which means there decleration is moved on top ✅ ================

//      console.log(a)
//      var a = 12;      => It will give undefined in console || N.B undefined... not... not defined => Variable is present but undefined 
//      matlab wo declare ho kar upar chala gya


// 4. ======================================= Types in JS => Primitive & Reference => Arrays & Methods ✅ ===============================

//      primitive = number, string, null, undefined, boolean
//      reference = () {} []
// Aisi koi bhi value jisko copy karne par real copy nahi hota balki usme value ka refrence pass ho jata hai...Usko hum Reference value kehte hai
// Or jisko copy karne par real copy ho jaye wo value primitive value hota hai
// Var me agar brackets hai to Refrence ... Agar Brackets nahi hai to primitive

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods:

console.log(myArr.length);
myArr.pop();
myArr.push("akash")
myArr.shift()
const newLen = myArr.unshift("akash")
console.log(newLen);
console.log(myArr);

// Delete pop => delete myArr.fan


// 5. ======================================= Conditionals --> if , else , else-if ✅ =======================================
//  => Bat yadi Agar Magar par a jaye 
// if(){} ;     else if(){} ;       else(){}

//Examples:
var age = 41;

// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}

// if - else statement
if(age > 18){
    console.log('You can drink rasna water');
}
else{
    console.log('You cannot drink rasna water');
}

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");



// 6. ========================================= Loops => for, forEach ,while, dowhile ✅ ====================================================

// Agar kisi bhi chiz ko  repeat karana ho tub hum loops ka use karte hai

var arr = [1, 2, 3, 4, 5, 6, 7];

//for loop:
console.log(arr);
for(var i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i])
}

// forEach loop: 
arr.forEach(function(element){
    console.log(element);
})
const ac = 0;
ac++;
ac = ac +1;
let j = 0;

// while loop:
while(j<arr.length){
    console.log(arr[j]);
    j ++;
}

// do while loop => Run the loop only once
do{
    console.log(arr[j]);
    j++;
} while (j < arr.length);



// 7. ======================================================== Operators in JavaScript ✅ ==================================================

// Arithmetic Operators:
var a = 100;
var b = 10;
console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);

// Assignment Operators:
var c = b;
c += 2;
c -= 2; // c = c - 2;
c *= 2;
c /= 2;
console.log(c);

// Comparison Operators:
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// *******Logical Operators: ******

// Logical and
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// Logical or
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Logical not
console.log(!false);
console.log(!true);


// 8. ========================================= Functions ✅ ==============================================================

// function = code ko ek nam dena or bad me use wo nam phir likh k us code ko chala paye => function call karna
// function mainly 3 kam k liye use hota hai:
//       1) Jab code ko turant na chalana ho.Future me chalana chate hai to use ek function me likh kar rakh sakhte hai
//       2) Jab code ko reuse karna ho... Us function k nam ko likho => function ko call karo
//       3) Jab code chalana ho with different data => Example se samajte hai

//  Example 1:
function vscodekholo(){
    // function statement
    console.log("1. Ek folder banao apke project k nam se")
    console.log("Right click karke open with vs-code wale option pe click karo. VSCode khul jayega\n")
    //using diff. data
    var a = [ 2 ,"2. New folder banao","VS code kholo", "File tab par click karo", "Open folder par click karo wo folder vs code me khul jayega"]
    console.log(a)
} // abhi code ko run karoge to console me kuch nahi milega => Code Turant nahi chala => Function ko chalane k liye uske nam ko likhna parega tabhi code chalega
vscodekholo(); // function ko call kiya ab ye wala code chalega

//Example 2:
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}


// 9. ==================================================== String Methods in JavaScript ✅ ======================================

let myLovelyString = "Akash is a good boy good good akash";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("good"))
console.log(myLovelyString.lastIndexOf("good"))

console.log(myLovelyString.slice(1,4))

d = myLovelyString.replace("Sham", "Rohan");
d = d.replace("good", "bad");
console.log(d, myLovelyString)

let myDate = new Date();

console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours())


// 10. ************************************************* Document Object Model (DOM) manipulation ✅ ****************************************************

// In DOM manipulation we select html & css elements through js & give logic to it. Like on clicking this button of html What will happen??
// All this logic is given by JS & precisely by manupulating DOM 

// Basic=> 4 pillars of DOM:
/* 
1)Selection of an Element --✅
2)Changing HTML -- ✅
3) Changing CSS -- ✅
4) Event Listner --✅
*/

var _elem = document.querySelector("h1") //this will select element => Here, h1 || for id->#elem name  || for class-> .elem name

_elem.innerHTML = "This is a Akash's  JS Notes";//this will change the html element || Here h1

_elem.style.color = "white"; // by using style we are accessing css through js & use css properties || change h1 text color to white
_elem.style.backgroundColor = "black"; // This will change background color of h1 to black

_elem.addEventListener("click", function(){ 
    _elem.innerHTML = "I'm changed now "
})
// This will change the text on click



let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass);
elemClass[0].style.background = "yellow";
console.log(elem.innerHTML);
console.log(elem.innerText); 

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText); 
tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element

 
// Selecting using Query

sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll('.container')
console.log(sel)

function clicked(){
    console.log('The button was clicked')
}
window.onload = function(){
    console.log('The document was loaded')

}

// Events in JavaScript

firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Clicked on Container")
})

firstContainer.addEventListener('mouseover', function(){
    console.log("Mouse on Container")
})

firstContainer.addEventListener('mouseout', function(){
    console.log("Mouse out of Container");
})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Mouse down when clicked on Container");
})


// Arrow Functions

function summ(a, b){
    return a+b;
}


summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}


// SetTimeout and setinterval

clr = setTimeout(logKaro, 5000);
clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage

localStorage.setItem('name', 'akash') 
localStorage 
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear();

// Json:

obj = {name: "akash", length: 1, a: {this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed = JSON.parse(`{"name":"akash","length":1,"a":{"this":"that"}}`)
console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)