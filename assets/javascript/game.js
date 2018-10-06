
var possibleWords = ['ashley', 'blah', 'hehexd', 'memes', 'sushi', 'videogames'];


var randWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
console.log(randWord);

var answerArray = [];
for (var i = 0; i < randWord.length; i++) {
 answerArray[i] = "_";
}
var remainingLetters = randWord.length;


var userPossibleGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
             'v', 'w', 'x', 'y', 'z', ' '];


var lives = 7;


var wrongGuesses = [];


var rightGuesses = [];



var score = 0;


document.onkeyup = function (event) {

    var userGuess = event.key;

    var answerCorrect = false;

    document.getElementById("section").classList.remove("h2");

    if (userPossibleGuess.indexOf(userGuess) > -1) {          




        for (var n = 0; n < randWord.length; n++) {
            if (wrongGuesses[n] === userGuess || rightGuesses[n] === userGuess) {
                alert('You already tried that, pick another!');
                return;
            }
        }


        for (var i = 0; i < randWord.length; i++) {     
            if (userGuess === randWord[i]) {erscore
                answerArray[i] = userGuess;
                answerCorrect = true;
                rightGuesses.push(userGuess);
                score++;
            }
        }

        document.getElementById('section').innerHTML = answerArray;

        
        if (score === randWord.length) {
            document.getElementById('title').innerHTML = 'You Win!';    
            document.getElementById('guesses').style.display = "none";
            document.getElementById('livesLeft').style.display = "none";
            document.getElementById('section').innerHTML = 'Refresh the page to play again!';
        }

        if (lives < 2) {
            document.getElementById('title').innerHTML = 'Game over!'; 
            document.getElementById('guesses').style.display = "none";
            document.getElementById('livesLeft').style.display = "none";
            document.getElementById('section').innerHTML = 'Refresh the page to play again!';
        }


    if (wrongGuesses.indexOf(userGuess) < 1) {

        if (answerCorrect === false && userGuess !== " ") { 
            lives--;
            wrongGuesses.push(userGuess);
            document.getElementById('guesses').innerHTML = wrongGuesses;
        }
    }

        
        document.getElementById('livesLeft').innerHTML = lives;



    }
}