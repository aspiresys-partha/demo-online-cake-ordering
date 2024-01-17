$(document).ready(function() {
    $("#login-button").click(function() {
        var email = $("#email").val();
        var password = $("#password").val();

        if (email === "Partha9080@gmail.com" && password === "Partha@123") {
            alert("Login Successful");
        } else {
            alert("Invalid Login");
        }
    });
});