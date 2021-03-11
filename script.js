window.onload = function () {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let categories;
    let chosenCategory;
    let word;
    let guess;
    let guesses = [];
    let lives;
    let counter;
    let space;

    //Get elements

    let showLives = document.getElementById("mylives");
    let showCategory = document.getElementById("categoryName");
    let getHint = document.getElementById("hint");
    let showClue = document.getElementById("clue");

    //Create alphabet

    let buttons = function () {
        myButtons = document.getElementById("buttons");
        letters = document.createElement("ul");

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = "alphabet";
            list = document.createElement("li");
            list.id = "letter";
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


//Select category

let selectCat = function () {
    if (chosenCategory === categories[0]) {
        categoryName.innerHTML = "The chosen category is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
        categoryName.innerHTML = "The chosen category is Films";
    } else if (chosenCategory === categories[2]) {
        categoryName.innerHTML = "The chosen category is Cities";
    }
}

//Create guesses

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

//Show lives

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

//Animate

let animate = function () {
       if (lives > 0) {
            let drawMe = lives;
            drawArray[drawMe]();
        } else {
            drawArray[0](); //Maybe refactor this code?
        }
}



//
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

//Play

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

    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
    paintLeg = true;
}

play();

//Hint

hint.onclick = function () {

    hints = [
        ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
        ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
        ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
    ];

    var categoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " + hints[categoryIndex][hintIndex];
};

// Reset

document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
}

}