window.onload = function () {
    var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z'];

let categories;
let chosenCategory;
let getHint;
let word;
let guess;
let guesses = []; 
let lives;
let counter;
let space;

let showLives = document.getElementsById("mylives");
let showCategory = document.getElementsById("categoryName");
let getHint = document.getElementsById("hint");
let showClue = document.getElementsById("clue");

let buttons = function () {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i=0; i < alphabet.length; i++) {
        letters.id = "alphabet";
        list = document.createElement("li");
        list.id = "letter";
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
}
}


// Hangman 
// The HTML <canvas> element is used to draw graphics via JavaScript.
canvas = function(){
    myStickman = document.querySelector('#stickman');
    context = myStickman.getContext('2d');
    context.beginPath();
    context.stokeStyle = "#f7f1e3";
    context.lineWidth = 2;
};

head = function() {
    myStickman = document.querySelector('#stickman');
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
};

draw = function($pathFromX, $pathFromY, $pathToX, $pathToY) {
    context.moveTo($pathFromX, $pathFromY);
    context.lineTo($pathToX, $pathToY);
    context.stroke();
}

frame1 = function() {draw (0, 150, 150, 150);};

frame2 = function() {draw (10, 0, 10, 600);};

frame3 = function() {draw (0, 5, 70, 5);};
 
frame4 = function() {draw (60, 5, 60, 15);};
    
torso = function() {draw (60, 36, 60, 70);};
    
rightArm = function () {draw(60, 46, 100, 50);};

leftArm = function () {draw(60, 46, 20, 50);};

rightLeg = function () {draw(60, 70, 100, 100);};

leftLeg = function () {draw(60, 70, 20, 100);};

drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


//OnClick Function

check = function() {
    list.onclick = function(){
        let guessLetter = (this.innerHTML); 
        this.setAttribute("class", "active");
        this.onclick = null;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guessLetter) {
                guesses[i].innerHTML = guessLetter;
                counter += 1;
            }
        }
        let j = (word.indexOf(guessLetter));
        if (j === -1) {
            lives -= 1;
            comments();
            animate();
        } else {
            comments();
        }
    }
}