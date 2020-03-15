//start game onclick
$("#questionsDiv").hide();
$("#resultsDiv").hide();
$("#reset").hide();
$("#timer").hide();
var interval = 1000;
var timer
var counterCorrect = 0;
var counterIncorrect = 0;
var timerCount = 60;
var totalQuestNum = 10;

$("#startBtn").on('click', function (event) {
    event.preventDefault() ;
    $("#landing").hide();
        $("#questionsDiv").show();
        $("#timer").show();
    timer = setInterval(stopGame, interval);
})

function stopGame() {
    if (timerCount > -1) {
        $("#timer").text(timeConverter(timerCount));
        timerCount--;
    } else {
        $("#questionsDiv").hide();
        $("#resultsDiv").show();
        $("#reset").show();

    // if ((counterCorrect + counterIncorrect) !== totalQuestNum) {
    //         counterIncorrect = totalQuestNum - (counterCorrect + counterIncorrect)
    //         console.log("New counter incorrect if not equal to total: " + counterIncorrect);
    //     }

    counterIncorrect = totalQuestNum - counterCorrect;


        $("#resultsDiv").empty();
        $("#resultsDiv").prepend("Right Answers: " + counterCorrect + "<br>");
        $("#resultsDiv").prepend("Wrong Answers: " + counterIncorrect + "<br>");
        clearInterval(timer);
    }
}


$("#reset").on("click", function (event){
    counterCorrect = 0;
    counterIncorrect = 0; 
    $("#timer").text("00:00");
    $("#resultsDiv").empty();
    timerCount = 60;
    totalQuestNum = 10;
    timer = setInterval(stopGame, interval);
    $("#questionsDiv").show();
    $("input[class='correct']").prop("checked", false);
    $("input[class='incorrect']").prop("checked", false);
    // $(".correct").prop("checked", false);
    // $(".incorrect").prop("checked", false);
})


$(".correct").on('click', function () {
    counterCorrect++;

})

// $(".incorrect").on('click', function () {
//     counterIncorrect++;

// })

function timeConverter(t){
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds <10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

//if you have time for a challenge - 
//questions and answers array and create the timer/q&a dynamically
//make questions an empty div
//make an array variable in the global scope
//when adding the array, make sure it's formatted as an array of json objects
//example:
//questions =[{ question: "first question", answers: ["1option","2option","3optopn"], answer:"rightnswer"]

//make a global variable = currentQuestion
//function called displayQuestion
//so when you start the start button, you make container show and call 
//displayQuestion function - where it shows currentQuestion and options

//modify the onClick for right and wrong - 
//have a pointer to question array - questio number is your pointer 
//after displaying the 1st question, user selects - right or wrong, or the timer ends
//when the user clicks, make it go to the next next question
//whether right/wrong, timer runs out - increment to right/wrong counters 
//when increasing display of current question number, NEVER go above questions array - 
//at this point, just call results function - and make the results function separate to timer 
//time runs out - stop running 


