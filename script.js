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




































































  
      

































      play = function () {
        categories = [
            ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
            ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
            ["manchester", "milan", "madrid", "amsterdam", "prague"]
        ];
    
        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();
    
        guesses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
      }
    
      play();

      hint.onclick = function() {

        hints = [
          ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
          ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
          ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
      ];
  
      var categoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue: - " +  hints [categoryIndex][hintIndex];
    };