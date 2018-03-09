

// PSEUDOCODE
// -------------------------------------------------------------

//repeat until (A) or (B):
//user guesses
// (A)user gives correct guess
//add a win to the screen
//app picks a new letter
//reset guessesLeft  to zero

//(B) user gives a wrong guess
//subtract 1 from guessesLeft
//IF guessesLeft becomes 0.
//add 1 to losses
//app picks a new letter
//reset guessesLeft to 0
//ELSE repeat until (C) or (D):
//add guess to guesses on screen
//decrease guessesLeft count by 1
//(C) user runs out of guesses
//add a loss to the screen
//(D) user gives correct guess
//add win to the screen
//app picks new letter
//reset guessesLeft to zero


//3 functions
//evaluate guess
//correct guess
//incorrect guess
//track guesses left
//restart



// GLOBAL VARIABLES
// --------------------------------------------------------------

// Declare variables for wins, losses, guessesLeft,  
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
// var randomLetter = "a";
var computerLetter = generateRandomLetter();
// var userGuessed = "";
var userGuessedString = "";


// FUNCTIONS
// -------------------------------------------------------------
// App randomly picks a letter


function generateRandomLetter() {
    
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randomLetter = "a"
    randomLetter = computerChoices[Math.floor(Math.random()*(computerChoices.length))];
    return randomLetter;
    //Test
    // console.log ("generateRandomLetter ran");

}

//Compare user's guess to computer's letter
function compareGuessToComputer() {
    
    //Test
    // console.log ("it ran");
    // console.log (computerLetter);
    // console.log (userGuessed);
    
    if (userGuessed == computerLetter) {
        
        //Test
        console.log ("if win ran");
        winCount++;
        alert("You won!");
        //test
        // alert("Wins: " + winCount);
        document.getElementById("winCounter").innerHTML = winCount;
        restart();
        

    } else if (guessesLeft>=2) {
         //test
        //  console.log("test guesses left should drop ");
        // console.log (event.key);
        
        userGuessedString = userGuessedString + userGuessed + " ";
        document.getElementById("userGuesses").innerHTML = userGuessedString;
        guessesLeft--;
        document.getElementById("guessCounter").innerHTML = guessesLeft;

    } else {
        lossCount++;
        //test
        // alert("Losses: " + lossCount);
        alert("You lost!");
        document.getElementById("lossCounter").innerHTML = lossCount;
        restart();
    }
}
// restart game
function restart() {
    // console.log (computerLetter);
    // 
    generateRandomLetter();
    console.log ("restart letter is " + computerLetter);
    guessesLeft = 9;
    userGuessedString = " ";
    document.getElementById("userGuesses").innerHTML = userGuessedString;
    document.getElementById("guessCounter").innerHTML = guessesLeft;
    
    // Test
    // console.log ("generateRadomLetter ran")
     
}

// MAIN PROCESS
// --------------------------------------------------------------
console.log(computerLetter);
//determine what the user guessed 
document.onkeyup = function (event) {
    userGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    
    //Test
    // console.log (userGuessed);
    
    compareGuessToComputer();
    // Testing
    // console.log(guessesLeft);
    
}


