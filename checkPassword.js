let accounts = {}
const filePath = "passwords.txt"

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


loginForm.addEventListener('submit', function(loginEvent){
    loginEvent.preventDefault();

    const submittedUsername = usernameInput.value.trim();
    const submittedPassword = passwordInput.value.trim();
    const storedPassword = accounts[submittedUsername];

    if (storedPassword == submittedPassword ){

        messageDiv.textContent = "Login Successfull";
        messageDiv.style.color = "green";
        
        
        setTimeout(() => {

            window.location.href = "mainMenu.html";
        },1000)
    }
    else{
        messageDiv.textContent = "Incorrect Username or Password... Please try again.";
        messageDiv.style.color = "red";
    }

})