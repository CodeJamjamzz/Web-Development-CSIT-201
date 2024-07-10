console.log("Successfully connected between JS and HTML");

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const table = document.getElementById('userTable');
    const cancelButton = document.getElementById('cancel');
    const firstNameError = document.getElementById('FirstNameError');
    const lastNameError = document.getElementById('LastNameError');
    const genderError = document.getElementById('GenderError');
    const dobError = document.getElementById('BirthdayError');

    function clearErrorMessages() {
        firstNameError.textContent = '';
        lastNameError.textContent = '';
        genderError.textContent = '';
        dobError.textContent = '';
        document.getElementById('FirstName').style.borderColor = 'black';
        document.getElementById('LastName').style.borderColor = 'black';
        document.getElementById('Birthday').style.borderColor = 'black';
        const genderInputs = document.getElementsByName('Gender');
        genderInputs.forEach(input => input.style.borderColor = 'black');
    }

    function addError(inputElement, errorElement, message) {
        errorElement.textContent = message;
        inputElement.style.borderColor = 'red';
    }

    function setCorrect(inputElement) {
        inputElement.style.borderColor = 'green';
    }

    function submitForm(event) {
        event.preventDefault();
        clearErrorMessages();

        const firstName = document.getElementById('FirstName').value.trim();
        const lastName = document.getElementById('LastName').value.trim();
        const dob = document.getElementById('Birthday').value.trim();
        const genderInputs = document.getElementsByName('Gender');

        let hasError = false;
        let genderValue = '';

        if (firstName === '') {
            addError(document.getElementById('FirstName'), firstNameError, 'First name is required.');
            hasError = true;
        } else {
            setCorrect(document.getElementById('FirstName'));
        }

        if (lastName === '') {
            addError(document.getElementById('LastName'), lastNameError, 'Last name is required.');
            hasError = true;
        } else {
            setCorrect(document.getElementById('LastName'));
        }

        if (dob === '') {
            addError(document.getElementById('Birthday'), dobError, 'Date of birth is required.');
            hasError = true;
        } else {
            setCorrect(document.getElementById('Birthday'));
        }

        for (const input of genderInputs) {
            if (input.checked) {
                genderValue = input.value;
                break;
            }
        }

        if (genderValue === '') {
            addError(genderInputs[0], genderError, 'Please select a gender.');
            hasError = true;
        } else {
            genderInputs.forEach(input => setCorrect(input));
        }

        if (hasError) {
            return;
        }

        const userData = {
            firstName: firstName,
            lastName: lastName,
            genderValue: genderValue,
            dob: dob
        };

        addRowToTable(userData);
        form.reset();
        clearErrorMessages();
    }

    function resetForm(event) {
        event.preventDefault();
        form.reset();
        clearErrorMessages();
    }

    function addRowToTable(userData) {
        const newRow = table.insertRow(-1);
        newRow.insertCell(0).textContent = userData.firstName;
        newRow.insertCell(1).textContent = userData.lastName;
        newRow.insertCell(2).textContent = userData.genderValue;
        newRow.insertCell(3).textContent = userData.dob;
    }

    form.addEventListener('submit', submitForm);
    cancelButton.addEventListener('click', resetForm);
});
