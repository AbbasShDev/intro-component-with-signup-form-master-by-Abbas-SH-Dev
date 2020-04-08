
$(".submitBtn").click(function(){
    if($(".inputFirst").val() === ""){
        $(".inputErrorFirst").text("First Name cannot be empty");
        $(".inputErrorFirst").addClass("inputError");
        $(".inputFirst").addClass("imgError");
    };
    if($(".inputFirst").val() != ""){
        $(".inputErrorFirst").text("");
        $(".inputFirst").removeClass("imgError");
    };

    if($(".inputLast").val() === ""){
        $(".inputErrorLast").text("Last Name cannot be empty");
        $(".inputErrorLast").addClass("inputError");
        $(".inputLast").addClass("imgError");
    }
    if($(".inputLast").val() != ""){
        $(".inputErrorLast").text("");
        $(".inputLast").removeClass("imgError");
    }

    if(isEmail($(".inputEmail").val()) === false){
        $(".inputErrorEmail").text("Looks like this is not an email");
        $(".inputErrorEmail").addClass("inputError");
        $(".inputEmail").addClass("imgError");
    }
    if(isEmail($(".inputEmail").val()) === true){
        $(".inputErrorEmail").text("");
        $(".inputEmail").removeClass("imgError");
    }

    if($(".inputPassword").val().length <= 5){
        $(".inputErrorPassword").text("Password length must be longer than 5");
        $(".inputErrorPassword").addClass("inputError");
        $(".inputPassword").addClass("imgError");
    }
    if($(".inputPassword").val().length > 5){
        $(".inputErrorPassword").text("");
        $(".inputPassword").removeClass("imgError");
    }

    if($(".inputFirst").val() != "" && $(".inputLast").val() != "" && isEmail($(".inputEmail").val()) === true && $(".inputPassword").val().length > 5){
        
        alert("Submitted successfully! Sending data...");
    }

});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }