$(document).ready(function(){
    $("#crquestion").on("click", function(e) {
        e.preventDefault()
        var question = $("#questiontext")
        var optionA = $("#optionA")
        var optionB = $("#optionB")
        var optionC = $("#optionC")
        var answer = $("#answer")

        var aQuestion = {
            question: question.val(),
            A: optionA.val(),
            B: optionB.val(),
            C: optionC.val(),
            answer: answer.val()
        }
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/questions",
            data: aQuestion,
        })
            .done(function () {
                window.location.assign("file:///C:/Users/Abimbola/Desktop/JS/Simple_quiz_project/questions.html");
            })
    })
    
})