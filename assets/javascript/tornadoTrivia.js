//REQUIREMENTS
//-------------------------------------------

// You'll create a trivia form with multiple choice or 
//true/false options (your choice).

// The player will have a limited amount of time to 
//finish the quiz. 


// The game ends when the time runs out. The page will 
//reveal the number of questions that players answer 
//correctly and incorrectly.


// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

//PSEUDOCODE
//----------------------------------------------------------------
//when game starts
// event handler for START button click
// replace start button with quiz questions and DONE button
// start timer
// display timer
// track correct and incorrect answers
//IF player press DONE before the timer expires
//switch to score display
//ELSE 
//switch to score display when timer expires

//GLOBAL VARIABLES
//-------------------------------------------------------------

var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unansweredCount = 0;
var totalQuestions = 8;
var time = 30;

//MAIN PROCESS
//------------------------------------------------------------
$(function () {
    //waits for click event handler on START button to call function startGame()
    $("#startButton").on("click", function () {
        
        //Testing
        console.log("start button clicked");
        
        startGame();
    });
    $("#endButton").on("click", function () {
        
        //Testing
        console.log("end button clicked");
       
        endGame();
    });
});


//FUNCTIONS

function startGame() {
    //switches html in quizBoard to replace start button with question list
    //starts timer()

    //Testing
    console.log("startGame() ran");

    $("#startButton").hide();
    $("#questions").show();
    window.setTimeout(endGame, 30000);
    timerInterval = setInterval(updateTime, 1000);
    $("#displayTimeRemain").text("Time Remaining: " + time);
    
    //Testing
    console.log(time);
    
    questionAnswerCount();
}

function updateTime() 
{
    time--;

    $("#displayTimeRemain").text("Time Remaining: " + time);

    //testing
    console.log(time);

    if (time < 1) 
    {
        clearInterval(timerInterval);
    }
}

function questionAnswerCount() {
    //waits for input event handler on questions

    //Testing

    // {   console.log (".question form clicked");

    //compares input to correct answers and tallies score
    $(".correct").on("click", function () {
        correctAnswerCount++;

        //Testing 
        console.log("correctAnswerCount= " + correctAnswerCount);
    });

    $(".incorrect").on("click", function () {
        incorrectAnswerCount++;

        //Testing 
        console.log("incorrectAnswerCount= " + incorrectAnswerCount);
    });
    //Testing
    console.log("questionAnswerCount() ran");
}


function endGame() {
    //switches html in quizBoard div to display of results
    
    $("#questions").hide();
    $("#results").show();

    //Testing
    console.log("endGame() ran");
    
    unansweredCount = (totalQuestions - correctAnswerCount - incorrectAnswerCount);
    $("#correctCountDisplay").text("Correct Answers: " + correctAnswerCount);
    $("#incorrectCountDisplay").text("Incorrect Answers: " + incorrectAnswerCount);
    $("#unansweredCountDisplay").text("Unanswered Questions: " + unansweredCount);
}




