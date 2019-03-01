$(document).ready(function(){
    var question = $('#question')
    $.ajax({
        type: "GET",
        url: 'http://localhost:3000/questions',
        success: function(data) {
            var count = 0
            $.each(data, function(i, item){
                count++
                question.append('<p><strong> ' + count + ')  ' + item.question + '</strong></p><p><input class = "options" type = "radio" name= '+ item.id +' value = '+ item.A + '> A   ' + item.A +'</p><p><input class = "options" type = "radio" name= '+ item.id +' value = '+ item.B + '> B    ' + item.B +'</p><p><input class = "options" type = "radio" name='+ item.id +' value = '+ item.C + '> C    '+ item.C +'</p><p><input class = "correct" type = radio name= ' + item.id +' value = '+ item.answer + '></p><p class = "final"></p>')
            })
        },
        error: function(){
            alert('error loading orders')
        }
        
    })

    $("#finishQuestion").on("click", function(e){
        e.preventDefault()
            var guestOptions = $(".options")
            var corretAnswer = $(".correct")
            var guestAnswer = []
            var correctArray = []
            for (var i = 0; i< guestOptions.length; i++) {
                if (guestOptions[i].checked) {
                    guestAnswer.push(guestOptions[i].value)
                } 
            }
            for (var i = 0; i< corretAnswer.length; i++) {
                correctArray.push(corretAnswer[i].value)
            }   

            for (var i = 0; i< correctArray.length;i++){
                var msg = ""
                    if (guestAnswer[i] == correctArray[i]) {
                        msg =  "Correct     " + correctArray[i]     
                    }
                    else {
                        msg = "Wrong     " + correctArray[i]
                }
                $(".final").html(msg)
            }
    })
})