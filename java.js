document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email-box');
    const email = emailField.value;
    // console.log(email);
    const passwordField = document.getElementById('password-box');
    const password = passwordField.value;
    // console.log(password);
    if (email == 'imran@gmail.com' && password == 'imran') {
        window.location.href = 'bank.html';
    } else {
        alert('Your password is incorrect please try again');
    }
})