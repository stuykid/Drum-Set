            /* MAKE SOUND FOR DETECTING A BUTTON CLICK */

let lenButtons = document.querySelectorAll(".drum").length; //length of buttons in array w/class of drum
let eachButton = document.querySelectorAll(".drum"); // target each individual button

for (let i = 0; i < lenButtons; i++){ //loop through buttons 1-7

    eachButton[i].addEventListener("click", function (){ //assign event listener to each button
        
        let buttonInnerHTML = this.innerHTML; //target the letter of the button clicked 
        
        handleSound(buttonInnerHTML); //add sound to button clicked

        buttonAnimation(buttonInnerHTML); //add animation to button clicked
    }); 

    
    
};


            /*Make sound for keyboard presses*/

document.addEventListener("keydown", function(event){ //callback function to add listener to entire page for a keystroke
    
    handleSound(event.key); //add sound to button triggered by keystroke

    buttonAnimation(event.key); //add animation to button triggered by keystroke
});



function handleSound(key){ //function to make sound
    
    switch (key) { // switch statement to play sound based on button clicked/ keypress
        case 'w': 
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            
            break;

        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let bass = new Audio("./sounds/kick-bass.mp3");
            bass.play();
            break;

        default:
            console.log(this.innerHTML);
            
    }
};

function buttonAnimation(currentKey){ // add pressed animation when clicked/pressed
    let activeButton = document.querySelector("." + currentKey); //("." + "letter") target the activebutton pressed

    activeButton.classList.add("pressed"); // assign class "pressed" to button

    setTimeout(function(){
        activeButton.classList.remove("pressed"); // after 1/100 second, remove class "pressed"
    }, 100 );

}