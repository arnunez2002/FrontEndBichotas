function add(){
    var nombre = {toJson: function(){document.getElementById("nombre").value;}};
    var username = {toJson: function(){document.getElementById("username").value;}};
    var email = {toJson: function(){document.getElementById("email").value;}};
    var role = {toJson: function(){document.getElementById("role").value.toUpperCase();}};
    var password = {toJson: function(){document.getElementById("password").value;}};
    $.ajax ({
        type : " POST " ,
        url : " URL del Servicio Web " ,
        contentType : " application / json " ,
        data : JSON.stringify ({
            "nombre":nombre,
            "username":username,
            "email":email,
            "role":role,
            "password":password
            }) ,
            success : function (data) {
        $ ( "#responseJS" ).html( "Insercion realizada." ) ;
    } ,
error : function(res) {
        alert ( "ERROR" + res.statusText ) ;
    }
}) ;
console.log(data);
}