                    /*....... REFACTORED WITH JQUERY.........*/
                    
                    /* DETECT BUTTON CLICK */


/* let numButtons = document.querySelectorAll(".drum").length;
let drum = document.querySelectorAll(".drum");

for (let i = 0; i < numButtons; i++){
    drum[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;
        handleSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
        
        
    })
} */


$(".drum").click(function(){              // assign click event listener to every button w/.drum class
    let buttonInnerHTML = this.innerHTML; // target the letter of the button clicked 
    handleSound(buttonInnerHTML);         // add sound to button clicked
    addAnimation(buttonInnerHTML);        // add animation to button clicked
})




                    /* DETECT KEYBOARD PRESS */

/* document.addEventListener("keydown", function(event){
    handleSound(event.key);
    addAnimation(event.key);
}) */

$(document).keydown(function(event){     // assign keypress event listener to entire webpage
    handleSound(event.key);              // add sound to button clicked
    addAnimation(event.key);             // add animation to button clicked
})




                    /* ANIMATION */

/* function addAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); //add the css class "pressed" to button clicked/pressed

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}; */

function addAnimation(currentKey){  // add pressed animation when clicked/pressed
    $("." + currentKey).addClass("pressed"); // assign class "pressed" to button

    setTimeout(function(){
        $("." + currentKey).removeClass("pressed") // remove class "pressed" after .01 seconds
    }, 100);

};



                    /* HANDLE SOUND */

function handleSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            
            break;
        case 'a':
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
                
            break;
        case 's':
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            
            break;
        case 'd':
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
                
            break;
        case 'j':
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
                
            break;
        case 'k':
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
                
            break;
        case 'l':
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
                    
            break;

        default:
            console.log(this.innerHTML);
            break;
    }

}