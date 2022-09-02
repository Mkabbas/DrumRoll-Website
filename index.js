var drum_buttons = document.querySelectorAll(".drum");

for(var i = 0; i < drum_buttons.length; i++) {

    drum_buttons[i].addEventListener("click", function() {play_sound(this.innerHTML); effects(this.innerHTML);});    // Plays sound on click
}

document.addEventListener("keydown", function(event) {play_sound(event.key); effects(event.key);}); //Plays sound on respective keystroke

function play_sound(char) {
    switch (char) {
        case "a":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "f":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "g":
            new Audio("sounds/snare.mp3").play();
            break;
        case "h":
            new Audio("sounds/crash.mp3").play();
            break;
        case "j":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:             /* Wont run, but good practice to include in the code. */
            console.log(char);
            break;
    }
}

function effects(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function() {document.querySelector("." + key).classList.remove("pressed");}, 100);
}