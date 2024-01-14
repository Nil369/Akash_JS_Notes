// Turn ON/OFF Bulb

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var lever = 0

btn.addEventListener("click", function(){
    if (lever == 0){
        bulb.style.backgroundColor = "yellow"
        console.log("bulb turned on")
        btn.innerHTML = "OFF"
        lever = 1
    }
    else{
        bulb.style.backgroundColor = "transparent"
        console.log("bulb turned off")
        btn.innerHTML = "ON"
        lever = 0
    }
    
})