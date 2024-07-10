function Form() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var bday = document.getElementById('bday').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;

    var isValid = true;

    if (fname === '') {
        document.getElementById('fname-err').textContent = 'First name cannot be empty.';
        document.getElementById('fname').classList.add('err-input');
        isValid = false;
    } else {
        document.getElementById('fname-err').textContent = '';
        document.getElementById('fname').classList.remove('err-input');
    }

    if (lname === '') {
        document.getElementById('lname-err').textContent = 'Last name cannot be empty.';
        document.getElementById('lname').classList.add('err-input');
        isValid = false;
    } else {
        document.getElementById('lname-err').textContent = '';
        document.getElementById('lname').classList.remove('err-input');
    }

    if (bday === '') {
        document.getElementById('bday-err').textContent = 'Birthday cannot be empty.';
        document.getElementById('bday').classList.add('err-input');
        isValid = false;
    } else {
        document.getElementById('bday-err').textContent = '';
        document.getElementById('bday').classList.remove('err-input');
    }

    if (!gender) {
        document.getElementById('gender-err').textContent = 'Please select a gender.';
        isValid = false;
    } else {
        document.getElementById('gender-err').textContent = '';
    }

    if (email === '') {
        document.getElementById('email-err').textContent = 'Email cannot be empty.';
        document.getElementById('email').classList.add('err-input');
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('email-err').textContent = 'Please enter a valid email address.';
        document.getElementById('email').classList.add('err-input');
        isValid = false;
    } else {
        document.getElementById('email-err').textContent = '';
        document.getElementById('email').classList.remove('err-input');
    }

    if (pwd === '') {
        document.getElementById('pwd-err').textContent = 'Password cannot be empty.';
        document.getElementById('pwd').classList.add('err-input');
        isValid = false;
    } else {
        document.getElementById('pwd-err').textContent = '';
        document.getElementById('pwd').classList.remove('err-input');
    }

    if (cpwd === '') {
        document.getElementById('cpwd-err').textContent = 'Confirm Password cannot be empty.';
        document.getElementById('cpwd').classList.add('err-input');
        isValid = false;
    } else if (pwd !== cpwd) {
        document.getElementById('cpwd-err').textContent = 'Passwords do not match.';
        document.getElementById('cpwd').classList.add('err-input');
        isValid = false;
    } else {
        document.getElementById('cpwd-err').textContent = '';
        document.getElementById('cpwd').classList.remove('err-input');
    }

    return isValid;
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
