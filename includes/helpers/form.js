$(document).ready(function () {
    

    // validate the input fields on blur
    $("#firstName").blur(function () {
        $("#firstNameErrorMsg").hide();
        if (!/^[a-zA-Z]+$/.test(this.value)) {
            $("#firstNameErrorMsg").show();
        }
    });
    $("#lastName").blur(function () {
        $("#lastNameErrorMsg").hide();
        if (!/^[a-zA-Z]+$/.test(this.value)) {
            $("#lastNameErrorMsg").show();
        }
    });
    $("#email").blur(function () {
        $("#emailErrorMsg").hide();
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
            $("#emailErrorMsg").show();
        }
    });
    $("#loginEmail").blur(function () {
        $("#loginEmailErrorMsg").hide();
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
            $("#loginEmailErrorMsg").show();
        }
    });
    $("#password").blur(function () {
        $("#passwordErrorMsg").hide();
        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(this.value)) {

            $("#passwordErrorMsg").show();

        }

    });
    $("#confirmPassword").blur(function () {
        $("#confirmPasswordErrorMsg").hide();
        if ($("#password").val() != $("#confirmPassword").val()) {
            $("#confirmPasswordErrorMsg").show();
        }
    });
})
function validateForm(){
    // event.preventDefault();

    var counter = 0; //set the counter to zero and increment it for each field that is invalid
    // var changeconfirmPassword = "";
    // var passwordText = "";
    if (!/^[a-zA-Z]+$/.test($("#firstName").value)) {
        $("#firstNameErrorMsg").show();
        counter += 1;
    }
    if (!/^[a-zA-Z]+$/.test($("#lastName").value)) {
        $("#lastNameErrorMsg").show();
        counter += 1;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email").val())) {
        $("#emailErrorMsg").show();
        $("#emailErrorMsg").text("Example= yourname@example.com ");
        counter += 1;
    }
   



    if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/.test($("#password").val())) {
        // passwordText = "Password"
        $("#passwordErrorMsg").show();
        counter += 1;
    }
    if ($("#password").val() != $("#confirmPassword").val()) {
        changeconfirmPassword = " - Confirm Password"
        counter += 1;
        $("#confirmPasswordErrorMsg").show();
        // $("#confirmPasswordErrorMsg").textContent = "Fill up your " + passwordText + changeconfirmPassword;
    }


   

    if ($("#course").val() == this.undefined) {
        $("#courseErrorMsg").show();
        counter += 1;
    }
    else {
        $("#courseErrorMsg").hide();
    }


    if ($("input[name='gender']:checked").val() == this.undefined) {
        $("#genderErrorMsg").show();
        counter += 1;
    }
    else {
        $("#genderErrorMsg").hide();
    }

    if ($('input[name="language"]:checked').val() == this.undefined) {
        $("#languageErrorMsg").show();
        counter += 1;
    }
    else {
        $("#languageErrorMsg").hide();
       
    }

    if (counter === 0) {
        //   alert('ok');
          var name=$('input[name="firstName"]')[0].value + ' ' + $('input[name="lastName"]')[0].value ;
          var password=$('input[name="password"]')[0].value;
          var email=$('input[name="email"]')[0].value;
          var course=$("#course").val();
          var gender=$("input[name='gender']:checked").val();
          var language=$('input[name="language"]:checked').val();
        
          

           $.ajax({
            // make an ajax call to the corresponding function in validation.cfc to check if the email already exists
            url: "./services/validation.cfc", 
            type: "post",
            cache: false,
            data: {method: "emailExists", checkEmail: (email)},
            
            success: function (emailResponse){
                console.log("checking email");
                if(emailResponse==="true")
                {
                  // if it doesn't exist make another ajax call to insert the data in database
                  console.log(emailResponse);
                  $.ajax({
                    url: "./services/validation.cfc", 
                    type: "post",
                    cache: false,
                    data: {method: "register", userName: (name), userPassword: (password), userEmail: (email), userCourse: (course), userGender: (gender), userLanguage: (language)},
                    success: function (){
                     
                        console.log("Inserted");
                        window.location="./index.cfm";
                      },
                    error: function (xhr, textStatus, errorThrown){
                      console.log("Error"); 
                      }

                    })
              }
              else{
                // if it exists show the error message
                console.log("checking email");

                $("#emailExistErrorMsg").show();
              }


      },
      error: function (xhr, textStatus, errorThrown){
        console.log("error email");

            // window.location='./sorry.cfm'; 
                    
          }
      });
  }    
  else{
      alert("no");
  }
}