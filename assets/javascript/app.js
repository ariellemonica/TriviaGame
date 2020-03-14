//start game onclick
$("#questionsDiv").hide();
$("#resultsDiv").hide();
var interval = 1000;
var timer
var counterCorrect = 0;
var counterIncorrect = 0;
var timerCount = 20;

$("#startBtn").on('click', function (event) {
    event.preventDefault() ;
    $("#landing").hide();
        $("#questionsDiv").show();


    timer = setInterval(stopGame, interval);
})
function stopGame() {
    if (timerCount > 1) {
        $("#timer").text("00:00" + timerCount);
        timerCount--;
    } else {
        $("#questionsDiv").hide();
        $("#resultsDiv").show();
        //remember to make a results div :)
        $("#resultsDiv").append("Right Answers: " + counterCorrect);
        $("#resultsDiv").append("Wrong Answers: " + counterIncorrect);
        clearInterval(timer);
    }
}


$(".correct").on('click', function () {
    counterCorrect++;

})

//questions and answers array - if you want :)

//time runs out - stop running 


