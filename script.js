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

