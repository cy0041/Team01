const loginButton = document.getElementById("SignUpBtn");
function containsSpecialCharacter(inputString) {
    // This regex looks for: NOT (a letter OR a number OR a space)
    const specialCharRegex = /[^a-zA-Z0-9\s]/;
    return specialCharRegex.test(inputString);
}

function containsLowercase(inputString) {
    // [a-z] matches any lowercase letter.
    return /[a-z]/.test(inputString);
}

function containsUppercase(inputString) {
    // [A-Z] matches any uppercase letter.
    return /[A-Z]/.test(inputString);
}

function containsNumber(inputString) {
    // \d matches any digit (0-9).
    return /\d/.test(inputString);
}

function checkValidUsername(inputString){
    if (inputString.search(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) == -1){
        return false;
    };
    return true;
}

function usernameSplit(username) {
    const displayName = username;
    return displayName;
}

loginButton.addEventListener('click', () => {
    event.preventDefault();
    const passDiv = document.getElementById("SignUpPassinp");
    const confirmDiv = document.getElementById("SignUpPassConfirmInp");
    const errorDiv = document.getElementById("SignUpMessage");
    const usernameDiv = document.getElementById("SignUpUsername");
    if (confirmDiv.value === passDiv.value) { 
        if (confirmDiv.value.length > 6){
            if (usernameDiv.value.length != 0){
                if (checkValidUsername(usernameDiv.value)){
                    if (containsSpecialCharacter(confirmDiv.value)){
                    if (containsLowercase(confirmDiv.value)){
                        if (containsUppercase(confirmDiv.value)){
                            if (containsNumber(confirmDiv.value)){
                                errorDiv.innerHTML = "";
                                displayName = usernameSplit(usernameDiv.value);
                                sessionStorage.setItem('loggedInUser', displayName);
                                sessionStorage.setItem('userRole', 'worker')
                                setTimeout(() => {
                                    window.location.href = "mainMenu.html";
                                },1000)
                                console.log("SUCCESS");
                            }else{
                                errorDiv.innerHTML = "ERROR : Password must contain at least 1 number character";
                            }
                        }else{
                            errorDiv.innerHTML = "ERROR : Password must contain at least 1 uppercase character";
                        }
                    }else{
                        errorDiv.innerHTML = "ERROR : Password must contain at least 1 lowercase character";
                    }     
                }else{
                    errorDiv.innerHTML = "ERROR : Password must contain at least 1 speical character";
                }
            }else{
                errorDiv.innerHTML = "ERROR : Username must be an email";
                
            }
        }else {
            errorDiv.innerHTML = "ERROR : Username must have non-zero length";  
        }
    } else {
        errorDiv.innerHTML = "ERROR : Password must be at least 7 characters long";  
        
    }
    }else{
        errorDiv.innerHTML = "ERROR : Passwords don't match";
    }
                
});