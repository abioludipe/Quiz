$('document').ready(function(){
    $("#delquest").submit(function(e){
        e.preventDefault()
        var questNo = $('#questNo').val()
        $.ajax({
            type: 'DELETE',
            url: `http://localhost:3000/questions/${questNo}`,
            success: function(data) {
                    window.location.assign("file:///C:/Users/Abimbola/Desktop/JS/Simple_quiz_project/questions.html")
                 }
        })
    })
})