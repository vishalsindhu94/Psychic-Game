var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins=0;
var loses=0;
var guesses=9;
var guessesLeft=9;
var UserGuess= [];
var ComputerGuess= [];

window.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	ComputerGuess.push(compGuess);
    console.log(ComputerGuess[0]);
    
    document.onkeyup = function(event) {
        var playerGuess = event.key;
        UserGuess.push(playerGuess);
        console.log(UserGuess[0]);
        if ((playerGuess === ComputerGuess[0]) && (guessesLeft > 0)) {
            wins++;
            guessesLeft = 9;
            UserGuess.length = 0;
            ComputerGuess.length = 0;
            var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            ComputerGuess.push(compGuess);
            console.log(ComputerGuess[0]);
        }
        
        else if ((playerGuess !== ComputerGuess[0]) && (guessesLeft > 0)) {
            guessesLeft = guessesLeft-1;
        }
        
        else {
            loses++;
            guessesLeft = 9;
            UserGuess.length = 0;
            ComputerGuess.length = 0;
            var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            ComputerGuess.push(compGuess);
            console.log(ComputerGuess[0]);
        }
        var html = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Loses: " + loses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + UserGuess + "</p>";
 
document.querySelector("#game").innerHTML = html;

}
    }
