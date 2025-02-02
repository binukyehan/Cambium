
const form = document.getElementById('form'); 
const previewButton = document.getElementById('previewButton');
const editButton = document.getElementById('editButton');
const submitButton = document.getElementById('submitButton');
const previewDiv = document.getElementById('preview');

function validateForm() {
    let isValid = true;
    clearErrors();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tele').value; 
    const date = document.getElementById('date').value;
    const easyornot = document.querySelector('input[name="easyornot"]:checked'); 
    const content = document.querySelector('input[name="content"]:checked'); 
    const webnavi = document.querySelector('input[name="webnavi"]:checked'); 
    const recieve_updates = document.getElementById('recieve-updates').value;

    if (name === '') {
        displayError('name', 'Name is REQUIRED');
        isValid = false;
    }

    if (email === '' || !validateEmail(email)) { 
        displayError('email', 'Enter a Valid Email');
        isValid = false;
    }

    if (tel === '') {
        displayError('tele', 'Telephone Number is required'); 
        isValid = false;
    }

    if (date === '') {
        displayError('date', 'Date is required');
        isValid = false;
    }

    if (!easyornot) { 
        displayError('easyornot', 'This is required');
        isValid = false;
    }

    if (!content) { 
        displayError('content', 'This is required');
        isValid = false;
    }

    if (!webnavi) { 
        displayError('webnavi', 'This is required');
        isValid = false;
    }

    if (recieve_updates === '') {
        displayError('recieve-updates', 'This is required');
        isValid = false;
    }

    return isValid;
}

function displayError(field, message) {
    const errorDiv = document.querySelector(`#${field} + .error`); 
    errorDiv.textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

previewButton.addEventListener('click', function () {
    if (validateForm()) {
        document.getElementById('previewName').textContent = 'Name: ' + document.getElementById('name').value;
        document.getElementById('previewEmail').textContent = 'Email: ' + document.getElementById('email').value;
        document.getElementById('previewtel').textContent = 'Telephone: ' + document.getElementById('tele').value; 
        document.getElementById('previewdate').textContent = 'Date: ' + document.getElementById('date').value;
        document.getElementById('previeweasyornot').textContent = 'Informative and easy to Navigate: ' + document.querySelector('input[name="easyornot"]:checked').value;
        document.getElementById('previewcontent').textContent = 'Content: ' + document.querySelector('input[name="content"]:checked').value;
        document.getElementById('previewwebnavi').textContent = 'Website Navigation: ' + document.querySelector('input[name="webnavi"]:checked').value;
        document.getElementById('previewrecieve_updates').textContent = 'Receive Update: ' + document.getElementById('recieve-updates').value;

        previewDiv.style.display = 'block';
        previewButton.style.display = 'none';
        editButton.style.display = 'inline';
        submitButton.style.display = 'inline';
    }
});

editButton.addEventListener('click', function () {
    previewDiv.style.display = 'none';
    previewButton.style.display = 'inline';
    editButton.style.display = 'none';
    submitButton.style.display = 'none';
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    if (validateForm()) {
        window.alert('FEEDBACK SUBMITTED\n\nTHANK YOU FOR YOUR FEEDBACK!');
        form.reset();
        previewDiv.style.display = 'none';
        previewButton.style.display = 'inline';
        editButton.style.display = 'none';
        submitButton.style.display = 'none';        
    }
});
