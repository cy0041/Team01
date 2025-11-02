let accounts = {};
const filePath = "passwords.txt"
let incorrectAttempts = 0;

function fetchUsernames(){
    fetch(filePath)
        .then(response => response.text())
        .then(fileContent => {
            const lines = fileContent.trim().split('\n');
            lines.forEach(line => {
                const part = line.split(',');
                
                // 1. Capture all three values using array destructuring
                const [username, password, isAdmin] = part;

                // Ensure the line has all three parts before trying to store
                if (username && password && isAdmin) {
                    // 2. Store an object as the value, containing password and isAdmin status
                    accounts[username.trim()] = {
                        password: password.trim(),
                        // Convert "1" to true, and "0" to false
                        isAdmin: isAdmin.trim() === '1' 
                    };
                }
            })
            
        })
}

fetchUsernames();

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('loginUsername');
const passwordInput = document.getElementById('loginPasswordinp');
const messageDiv = document.getElementById('loginMessage');
let time = 180

loginForm.addEventListener('submit', function(loginEvent){
    loginEvent.preventDefault();

    const submittedUsername = usernameInput.value.trim();
    const submittedPassword = passwordInput.value.trim();
    
 
    const userAccount = accounts[submittedUsername];
   
    if (incorrectAttempts < 4){
        if (userAccount && userAccount.password === submittedPassword ){
            
           const isAdmin = userAccount.isAdmin;
           if (isAdmin) { 
                messageDiv.textContent = "Login Successful";
                messageDiv.style.color = "green";
                
                sessionStorage.setItem('loggedInUser',submittedUsername);
                sessionStorage.setItem('userRole', 'admin')
                setTimeout(() => {
                    window.location.href = "mainMenu.html";
                },1000)
            }
            else {
                messageDiv.textContent = "Login Successful";
                messageDiv.style.color = "green";
                
                sessionStorage.setItem('loggedInUser',submittedUsername);
                sessionStorage.setItem('userRole', 'worker')
                setTimeout(() => {
                    window.location.href = "mainMenu.html";
                },1000)
            }
        }
        else{
            incorrectAttempts += 1;
            if (incorrectAttempts == 4){
                let id = setInterval(() => {
                    time -= 1;
                    document.getElementById('loginMessage').innerHTML = "Too Many Incorrect Attempts. Pls Try Again in " + time + " seconds";
                    }, 1000);
                setTimeout(() => {
                    incorrectAttempts = 0;
                    document.getElementById('loginMessage').innerHTML = ""
                    time = 180;
                    clearInterval(id)
                },180000 );
            }
            messageDiv.textContent = "Incorrect Username or Password... Please try again.";
            messageDiv.style.color = "red";
        }
    }
    else{
        // document.getElementById('loginMessage').innerHTML = "Too Many Incorrect Attempts. Pls Try Again in 3 mins."
    }
})