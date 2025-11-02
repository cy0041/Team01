let accounts = {};
const filePath = "passwords.txt"
const loginButton = document.getElementById("SignUpBtn");

function fetchUsernames(){
    fetch(filePath)
        .then(response => response.text())
        .then(fileContent => {
            const lines = fileContent.trim().split('\n');
            lines.forEach(line => {
                const part = line.split(',');
               
                const [username, password, isAdmin] = part;

              
                if (username && password && isAdmin) {
                  
                    accounts[username.trim()] = {
                        password: password.trim(),
                        isAdmin: isAdmin.trim() === '1' 
                    };
                }
            })
           
        })
}





function containsSpecialCharacter(inputString) {
    // looks for NOT (a letter OR a number OR a space)
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

fetchUsernames();
function checkEmailUnique(inputString){
    const usernameToCheck = inputString.trim();

    return !(usernameToCheck in accounts);
    
}

loginButton.addEventListener('click', () => {
    event.preventDefault();
    const passDiv = document.getElementById("SignUpPassinp");
    const confirmDiv = document.getElementById("SignUpPassConfirmInp");
    const errorDiv = document.getElementById("SignUpMessage");
    const usernameDiv = document.getElementById("SignUpUsername");
    if (checkEmailUnique(usernameDiv.value)){
        if (confirmDiv.value === passDiv.value) { 
            if (confirmDiv.value.length > 6){
                if (usernameDiv.value.length != 0){
                    if (checkValidUsername(usernameDiv.value)){
                        if (containsSpecialCharacter(confirmDiv.value)){
                        if (containsLowercase(confirmDiv.value)){
                            if (containsUppercase(confirmDiv.value)){
                                if (containsNumber(confirmDiv.value)){
                                    errorDiv.innerHTML = "";
                                    window.location.href = 'mainMenu.html';
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
    }else{
        errorDiv.innerHTML = "ERROR : Email already has an asscoiated account. ";
    }         
});