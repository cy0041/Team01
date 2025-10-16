const passwordInput1 = document.getElementById('loginPassword');
const toggleButton = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');

const showIcon = 'eyeOpen.svg';
const hideIcon = 'eyeClosed.svg';

toggleButton.addEventListener('click', () => {
    const isPasswordHidden = passwordInput.type === 'password';

    passwordInput.type = isPasswordHidden ? 'text' : 'password';
    eyeIcon.src = isPasswordHidden ? showIcon : hideIcon;
    eyeIcon.alt = isPasswordHidden ? 'Hide password' : 'Show password';


});