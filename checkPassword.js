let accounts = {}
const filePath = "passwords.txt"
let incorrectAttempts = 0;

function fetchUsernames(){
    fetch(filePath)
        .then(response => response.text())
        .then(fileContent => {
            const lines = fileContent.trim().split('\n');
            lines.forEach(line => {
                const part = line.split(',');
                const [username, password] = part;
                accounts[username.trim()] = password.trim();
            })
        })
}


fetchUsernames();

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('loginUsername');
const passwordInput = document.getElementById('loginPassword');
const messageDiv = document.getElementById('loginMessage');
let time = 180

loginForm.addEventListener('submit', function(loginEvent){
    loginEvent.preventDefault();

    const submittedUsername = usernameInput.value.trim();
    const submittedPassword = passwordInput.value.trim();
    const storedPassword = accounts[submittedUsername];
    if (incorrectAttempts < 4){
        if (storedPassword == submittedPassword ){

            messageDiv.textContent = "Login Successfull";
            messageDiv.style.color = "green";
            
            
            setTimeout(() => {

                window.location.href = "mainMenu.html";
            },1000)
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
        
        //document.getElementById('loginMessage').innerHTML = "Too Many Incorrect Attempts. Pls Try Again in 3 mins."

    }
})