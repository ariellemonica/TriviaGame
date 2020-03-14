//start game onclick
$("#questionsDiv").hide();
$("#resultsDiv").hide();
$("#reset").hide();
var interval = 1000;
var timer
var counterCorrect = 0;
var counterIncorrect = 0;
var timerCount = 10;
var totalQuestNum = 8; 

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
        $("#reset").show();
        //remember to make a results div :)
        if (counterCorrect + counterIncorrect !== totalQuestNum){
            counterIncorrect = totalQuestNum - (counterCorrect + counterIncorrect)
        }
        $("#resultsDiv").empty();
        $("#resultsDiv").prepend("Right Answers: " + counterCorrect);
        $("#resultsDiv").prepend("Wrong Answers: " + counterIncorrect + "<br>");
        clearInterval(timer);
    }
}


$("#reset").on("click", function (event){
    counterCorrect = 0;
    counterIncorrect = 0; 
    $("#timer").text("00:00")
    timerCount = 10;
    timer = setInterval(stopGame, interval);
    $("#questionsDiv").show();
    $("input[class='correct']").prop("checked", false);
    $("input[class='incorrect']").prop("checked", false);
    // $(".correct").attr("checked", false);
    // $(".incorrect").attr("checked", false);
})


$(".correct").on('click', function () {
    counterCorrect++;

})

$(".incorrect").on('click', function () {
    counterIncorrect++;

})

//questions and answers array - if you want :)

//time runs out - stop running 


