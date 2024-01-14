function getRandomColor() {
    const letters = '0123456789ABCDEF'; //defines a string containing all valid hexadecimal digits.
    let color = '#';//Initializes the color variable with a '#' symbol, which is the starting character of a hexadecimal color code.

    // Loop six times to generate a six-digit hexadecimal color code
    for (let i = 0; i < 6; i++) {
        // Get a random index from the 'letters' string
        const randomIndex = [Math.floor(Math.random() * 16)];

        // Append the character at the random index to the color code
        color += letters[randomIndex];

    }
    // Return the randomly generated color code
    return color;
}

// Method 1: 

const bulb1 = document.querySelector("#bulb1")
const bulb2 = document.querySelector("#bulb2")
const bulb3 = document.querySelector("#bulb3")
const bulbs = document.querySelectorAll(".bulb")
const btn = document.querySelector("#toggleButton")
var lever = 0



btn.addEventListener("click", function(){

    if (lever == 0){
        // bulb1.style.backgroundColor = getRandomColor();
        // bulb2.style.backgroundColor = getRandomColor();
        // bulb3.style.backgroundColor = getRandomColor();

       bulbs.forEach(bulbs => {   
            bulbs.style.backgroundColor = getRandomColor();
            
        });

        btn.innerHTML =  "OFF";
        btn.style.backgroundColor = "red";

        lever = 1
    }
    else{
        // bulb1.style.backgroundColor = "transparent";
        // bulb2.style.backgroundColor = "transparent";
        // bulb3.style.backgroundColor = "transparent";

        bulbs.forEach(bulbs => {   
            bulbs.style.backgroundColor = "transparent";
            
        });

        btn.innerHTML =  "ON";
        btn.style.backgroundColor = "rgb(158, 71, 240)";

        lever = 0
    }


})
