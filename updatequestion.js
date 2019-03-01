$('document').ready(function(){
    $("#editquest").submit(function(e){
        e.preventDefault()
        var questNo = $('#questNo').val()
        $.ajax({
            type: 'GET',
            url: `http://localhost:3000/questions/${questNo}`,
            success: function(data) {
                    $.each(data, function(key, value){
                        $('[name=' + key + ']', '#popeditquest').val(value)
                    })
                 }
        })

        $("#popeditquest").submit(function(e){
            e.preventDefault()
            var questiondata = $(this).serialize()
            $.ajax({
                type: 'PUT',
                url: `http://localhost:3000/questions/${questNo}`,
                data: questiondata,
                success: function(data) {
                    window.location.assign("file:///C:/Users/Abimbola/Desktop/JS/Simple_quiz_project/questions.html")
                    }
            })
        }) 
    })
})