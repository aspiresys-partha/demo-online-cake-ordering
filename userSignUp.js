document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registration-form").addEventListener("submit", function(event) {
        var newUsername = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var  mobileNumber = document.getElementById("mobileNumber").value;
        var newPassword = document.getElementById("password").value;
        var newPassword = document.getElementById("Confirmpassword").value;
        alert("Registration Successful. Redirecting to login.");
        window.location.href = "userLogin.hmtl";
        event.preventDefault();
    });
});