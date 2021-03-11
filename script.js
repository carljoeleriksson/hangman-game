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

let selectCategory = function() {
    if (chosenCategory === categories[0]) {
        categoryName.innerHTML = "The chosen category is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
        categoryName.innerHTML = "The chosen category is Films";
      } else if (chosenCategory === categories[2]) {
        categoryName.innerHTML = "The chosen category is Cities";
      }
    }

    result = function () {
        wordHolder = document.getElementById("hold");
        correct = document.createElement("ul");
    
        for (let i = 0; i < word.length; i++) {
          correct.setAttribute("id", "my-word");
          guess = document.createElement("li");
          guess.setAttribute("class", "guess");
          if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
          } else {
            guess.innerHTML = "_";
          }    
          guesses.push(guess);
          wordHolder.appendChild(correct);
          correct.appendChild(guess);
        }
      }
 
       comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
          showLives.innerHTML = "GAME OVER";
        }
        for (let i = 0; i < guesses.length; i++) {
          if (counter + space === guesses.length) {
            showLives.innerHTML = "YOU WIN!";
          }
        }
      }

      let animate = function () {
        let drawMe = lives ;
        drawArray[drawMe]();
      }




































































      check = function() {
          list.onclick = function() {
              let guess = (this.innerHTML);
              this.setAttribute("class", "active");
              this.onclick=null;
              for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                  guesses[i].innerHTML = guess;
                  counter += 1;
                } 
              }
              let j = (word.indexOf(guess));
              if (j === -1) {
                lives -= 1;
                comments();
                animate();
              } else {
                comments();
              }
            }
          }