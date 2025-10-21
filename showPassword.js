// Finds all the password toggle buttons on the page.
const toggleButton = document.querySelectorAll('.togglePassword');

// Defines the Icon file paths.
const showIcon = 'eyeOpen.svg';
const hideIcon = 'eyeClosed.svg';


toggleButton.forEach(button => {

    button.addEventListener('click', () => {

        const inputId = button.dataset.input;
        
        const passwordInput = document.getElementById(inputId);
        
        const eyeIcon = button.querySelector('img');


        const isPasswordHidden = passwordInput.type === 'password';

        passwordInput.type = isPasswordHidden ? 'text' : 'password';
        eyeIcon.src = isPasswordHidden ? showIcon : hideIcon;
        eyeIcon.alt = isPasswordHidden ? 'Hide password' : 'Show password';

    })

})