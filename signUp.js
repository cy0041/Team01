const loginButton = document.getElementById("SignUpBtn");
loginButton.addEventListener('click', () => {
    event.preventDefault();
    const passDiv = document.getElementById("SignUpPassinp");
    const confirmDiv = document.getElementById("SignUpPassConfirmInp");
    const errorDiv = document.getElementById("SignUpMessage");
    const usernameDiv = document.getElementById("SignUpUsername");
    if (confirmDiv.value === passDiv.value) { 
        if (confirmDiv.value.length > 6){
            if (usernameDiv.value.length != 0){
                errorDiv.innerHTML = "";
                window.location.href = 'mainMenu.html';
            }else{
                errorDiv.innerHTML = "ERROR : Username must hav enon-zero length";  
            }
        }else {
          errorDiv.innerHTML = "ERROR : Password must be at least 7 characters long";  
        }
    } else {
        errorDiv.innerHTML = "ERROR : Passwords don't match";
    }
});