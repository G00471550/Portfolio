$(document).ready(function(){


    $("#loginBtn").on("click", function() {
    var user = $("#username").val();
    var email = $("#useremail")
    
});

 $("input").on("focus", function() {
        $(this).addClass("active-field");
         
    });

    $("input").on("blur", function() {
        $(this).removeClass("active-field");
        var userInput = $(this).val();
        if(userInput.length < 5) {
            $(".active-field").css("border","solid","red","5px" );
    }
    });
  
    
    
    
    $("#dogGalBtn").on("click", function() {
        $.get("https://dog.ceo/api/breeds/image/random/8.", function(data){
            console.log(data);
            $.each(data.message,function(index, url){
                $("#dogs").append('<img src="' + url + '" class="gallery-img">');
                $(".gallery-img").css("width", "300px").css("height", "300px",);
            });
        })
    });

});