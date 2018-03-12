//REQUIREMENTS 
//--------------------------------------------------
// The player will have to guess the answer, 
//just like in Hangman.This time, though, the player will guess with
// numbers instead of letters.

//Here's how the app works:

// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount 
//of points to the player's total score. 


// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from 
//the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number.
//Also, all the crystals will have four new hidden values.Of course, the
// user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses.
//To that end, do not refresh the page as a means to restart the game.



//     Option 1 Game design notes


// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.





// PSEUDOCODE
// -------------------------------------------------------------
//Create a random number for the game overall between 19-120
//create random number for each crystal between 1-12
//Display random number to player
//record clicks on crystal images each time each time they click
//Add score and display to user each time they click

//IF score matches the random number, 
//record a win 
//display the win
//restart the game with 
//a new random number for the game overall
//a new random number for each crystal
//reset total score
//Else IF score < random number,
//continue to add each crystal click

//Else If score > random number
//record a loss
//display a loss
//restart the game with 
//a new random number for the game overall
//a new random number for each crystal
//reset total score


// GLOBAL VARIABLES
// -------------------------------------------------------------

var wins = 0;
var losses = 0;
var total = 0;
// var computerNumber = mainRandNumGen ();
var redRandom = 0;
var blueRandom = 0;
var greenRandom = 0;
var yellowRandom = 0;
var mainRandom = 0;


// FUNCTIONS
// -------------------------------------------------------------

//Create a random number for the game overall between 19-120
//create random number for each crystal between 1-12
function mainRandNumGen() {
    mainRandom = Math.floor(Math.random() * 120) + 19;
    //    return mainRandom;
    redRandom = Math.floor(Math.random() * 12) + 1;
    //    return redRandom;
    blueRandom = Math.floor(Math.random() * 12) + 1;
    //    return blueRandom;
    greenRandom = Math.floor(Math.random() * 12) + 1;
    //    return greenRandom;
    yellowRandom = Math.floor(Math.random() * 12) + 1;

    //Testing
    // console.log ("Red Crystal = " + redRandom);
    // console.log ("Blue Crystal = " + blueRandom);
    // console.log ("Yellow Crystal = " + yellowRandom);
    // console.log ("Green Crystal = " + greenRandom);
}

//Add score and determin win, loss or continue playing
function compareCount() {
    //IF total matches the random number,
    if (total == mainRandom) {

        //Testing
            //console.log("total == mainRandom is true" + "  " + "total is: " + total + "   " + "mainRandom is: " + mainRandom);
            //console.log(typeof (total));
            //console.log(typeof (mainRandom));
        //record a win
        wins++;
        //display the win
        alert ("You won!")
        $("wins").text("Wins: " + wins);
        //restart the game
        restart();
    }

    //Else If total > random number
    else if (total > mainRandom) {
        //Testing
            //console.log("total == mainRandom is false");
        //record a loss
        losses++;
        //display a loss
        alert ("You lost!")
        $("losses").text("Losses: " + losses);
        //restart the game 
        restart();
    }

}

//Display random number to player
//Update counter, wins and losses
function updateHtml() 
{
    $(".number").text(mainRandom);

    $(".counter").text(total);
  
    $(".wins").text("Wins: " + wins);
  
    $(".losses").text("Losses: " + losses);
    
}

//restart the game with 
//a new random number for the game overall
//a new random number for each crystal
//reset total score
function restart() 
{
    mainRandNumGen();
    updateHtml();
    console.log("mainRandom = " + mainRandom);
    console.log("Red Crystal = " + redRandom);
    console.log("Blue Crystal = " + blueRandom);
    console.log("Yellow Crystal = " + yellowRandom);
    console.log("Green Crystal = " + greenRandom);
    total = 0;
}


// MAIN PROCESS
// ---------------------------------------------
// Create and display a random number

$(function () 
{
restart();

    $(".redIcon").on("click", function () {
        // console.log ("The computer's number is: " + computerNumber);
        total = total + redRandom;
        console.log("Total= " + total);
        compareCount();
        updateHtml();
    });

    $(".blueIcon").click(function () {
        total = total + blueRandom;
        console.log("Total= " + total);
        compareCount();
        updateHtml();
    });

    $(".yellowIcon").click(function () {
        total = total + yellowRandom;
        console.log("Total= " + total);
        compareCount();
        updateHtml();
    });

    $(".greenIcon").click(function () {
        total = total + greenRandom;
        console.log("Total= " + total);
        compareCount();
        updateHtml();
    });

});








