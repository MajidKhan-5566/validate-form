$(document).ready(function () {
    // Name validation
    $("#name").on("keyup", function () {
        let uname = $(this).val().trim();
        let regexName = /^[a-zA-Z\s]{3,12}$/;
        if (!regexName.test(uname)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Name should be 3-12 letters").css({ "color": "red", "font-weight": "bold" });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Valid name").css({ "color": "green", "font-weight": "bold" });
        }
    });

    // Email validation
    $("#email").on("keyup", function () {
        let uemail = $(this).val().trim();
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexEmail.test(uemail)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Enter a valid email").css({ "color": "red", "font-weight": "bold" });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Valid email").css({ "color": "green", "font-weight": "bold" });
        }
    });

    // Password validation
    $("#password").on("keyup", function () {
        let upassword = $(this).val();
        let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regexPassword.test(upassword)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Password must have 8+ characters, a digit, and a special character").css({ "color": "red", "font-weight": "bold" });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Valid password").css({ "color": "green", "font-weight": "bold" });
        }
    });

    // Confirm password validation
    $("#cpassword").on("keyup", function () {
        let cpassword = $(this).val();
        let upass = $("#password").val();
        if (cpassword !== upass || cpassword === "") {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Passwords do not match").css({ "color": "red", "font-weight": "bold" });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Passwords match").css({ "color": "green", "font-weight": "bold" });
        }
    });

    // Form submission
    $("#registeration").click(function (e) {
        e.preventDefault();

        if ($("#name").val() && $("#email").val() && $("#password").val() === $("#cpassword").val()) {
            let userData = {
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#password").val(),
            };

            localStorage.setItem("userData", JSON.stringify(userData));
            alert("Account registered successfully!");
            window.location.replace("login.html");
        } else {
            alert("Please correct the errors.");
        }
    });
});
