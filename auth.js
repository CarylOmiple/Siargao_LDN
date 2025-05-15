const correctUser = "carylgwapa";
const correctPass = "wownice";

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (
            usernameInput.value === correctUser &&
            passwordInput.value === correctPass
        ) {
            // Set a flag in localStorage to indicate the user is logged in
            localStorage.setItem('isLoggedIn', 'true');
            // Redirect to Webhome.html
            window.location.href = 'Webhome.html';
        } else {

            usernameInput.setCustomValidity("What's your name sir e add tikas fb?");
            passwordInput.setCustomValidity("What do you want? me?");
            usernameInput.reportValidity();
            passwordInput.reportValidity();
        }
    });

    usernameInput.addEventListener('input', function () {
        usernameInput.setCustomValidity('');
    });

    passwordInput.addEventListener('input', function () {
        passwordInput.setCustomValidity('');
    });
});