$(document).ready(function(){
    var question = $('#question')
    $.ajax({
        type: "GET",
        url: 'http://localhost:3000/questions',
        success: function(data) {
            $.each(data, function(i, item){
                question.append('<p> ' + item.id + ')  ' + item.question + '</p><p><input type = "checkbox"> A   ' + item.A +'</p><p><input type = "checkbox"> B    ' + item.B +'</p><p><input type = "checkbox"> C    '+ item.C +'</p>')
            })
        },
        error: function(){
            alert('error loading orders')
        }
    })
})