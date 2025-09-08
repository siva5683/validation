var userName = document.getElementById('username');
var userNameMsg = document.getElementById('username-msg');
var password = document.getElementById('password');
var passwordMsg = document.getElementById('password-msg');
userName.addEventListener('input', function (e) {
    var regex = /^[A-Z][A-Za-z0-9]{8}$/;  
    var res = regex.test(e.target.value);

      if (e.target.value === "") {
        userNameMsg.textContent = "";   
        userNameMsg.className = "";
      } else if (res) {
        userNameMsg.textContent = "Valid Username";
        userNameMsg.className = "valid";
    } else {
        userNameMsg.textContent = "Not a Valid Username";
        userNameMsg.className = "invalid";
    }
});
password.addEventListener('input', function (e) {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@$%#&*!]{8,}$/;
    var res = regex.test(e.target.value);

    if (res) {
        passwordMsg.textContent = "Valid Password ";
        passwordMsg.className = "valid";
    } else {
        passwordMsg.textContent = "Password Not Valid";
        passwordMsg.className = "invalid";
    }
});
