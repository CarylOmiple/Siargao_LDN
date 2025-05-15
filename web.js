const correctUser = "carylgwapa"
const correctPass = "wownice"

    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        if (
            usernameInput.value === correctUser &&
            passwordInput.value === correctPass 
        ) {
            

            usernameInput.setCustomValidity('');
            passwordInput.setCustomValidity('');
        }
        else {
            event.preventDefault();
            
            usernameInput.setCustomValidity("What's your name sir e add tikas fb?");
            passwordInput.setCustomValidity("What do you want? me?");
            usernameInput.reportValidity();
        }
        })

        usernameInput.addEventListener('input', function() {
            usernameInput.setCustomValidity('');
            });

        passwordInput.addEventListener('input', function() {
            passwordInput.setCustomValidity('');
            })
