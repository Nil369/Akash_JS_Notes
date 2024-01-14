// ===========================================  1. Sync Vs Async JS ✅ ============================================================================

// sync matlab jab tak ek code khatam nahi hota tab tak dusra code shuru nahi hoga

console.log("hey");
console.log("hey1");
console.log("hey2");

// Async matlab saree kam ek sath suru kar do , jiska answer pehle a jaye uska jawab de dena
//Example: setTimeout(callback, timeinms) => callback function humesha answer ane par chalta hai ya precisely ans chalane k liye use hota hai


setTimeout(function(){
    console.log("hello")}, 3000)

// To pata kaise chale ki hum JS me sync ya async code likh rage hai ⁉️

// Ans => if you are using any of these in your js then u are writing a async js code :

setTimeout
setInterval
promises
fetch
axios
XMLHttpRequest

/*Note:  JS is not async => JS is single threaded & sync => Main stack = execution || Async = side stack => conversation btw M.S & S.S
is called Event Loop

SetTimeout / Fetch inka ans jab a jaye Side stack se then uska ans chalane k liye hum  callback => function  use karte hai
|| then catch || async await => ye sab use karte hai

uses => ReactJS, Data fetching from Db,etc.
*/



// ==========================================================   2. Promises ✅  ===============================================================

/* Promises => 3 cases hota hai => 1. Resolve 2. Reject 3. Pending
Ex: Maine promise kiya ki maine kal tumhe puri JS sikha dunga => Kal || Ye pending hai abhi => Ye to me is a pura karunga to ye resolve hoga
Agar nahi kar paya to reject hoga 
*/

// *********Example:************
var ans = new Promise((res, rej) => {
    if (true){
        return res;
    }
    else{
        return rej;
    }
})

ans
.then(function(){
    console.log("resolve ho gaya tha");
})
.catch(function(){
    console.log("resolve nahi hua tha");
})


// ==========================================================   3. Async Await ✅  ===============================================================

/* Koi bhi aisa function jisme hum async code likhenge kyuki ye async code hai to hum isme promises ka istemal kar sakte hai
Jab ans ayega tab to .then lagana padta parta hai...Agar .then nahi lagana to hum async await ka use karte hai
*/

// ****** Example: *****

async function hot(){
   let raw = await fetch(`https://randomuser.me/api/`);
   let data = await raw.json() ;
    console.log(data);
}hot();


// Concept Aside: 

/*
Concurency => Js me sync or async code ek sath process ho raha tha M.S or S.S me
Parallelism => focus karta hai processors or unke cores par kam ko chalane par
throttling => kisi code ko control karna executions
*/