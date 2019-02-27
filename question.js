$(document).ready(function(){
    var question = $('#question')
    $.ajax({
        type: "GET",
        url: 'http://localhost:3000/questions',
        success: function(data) {
            $.each(data, function(i, item){
                question.append()
            })
        },
        error: function(){
            alert('error loading orders')
        }
    })