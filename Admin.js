$('document').ready(function(){

    $("#form").submit(function(e){
        e.preventDefault()
        var username = $('#username').val()
        var password = $('#password').val()

        $.ajax({
            type: 'GET',
            url: `http://localhost:3000/users?username=${username}&password=${password}`,
            success: function(data) {
                    window.location.assign(`dashboard.html?username=${username}`)
                 }
        })
    })
})