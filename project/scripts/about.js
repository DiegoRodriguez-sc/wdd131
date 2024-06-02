document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');

    const showError = (input, errorElement, message) => {
        input.classList.add('invalid');
        errorElement.textContent = message;
    };

    const clearError = (input, errorElement) => {
        input.classList.remove('invalid');
        errorElement.textContent = '';
    };

    const validateName = () => {
        const nameValue = nameInput.value.trim();
        if (nameValue === '') {
            showError(nameInput, nameError, 'Name is required.');
            return false;
        }
        clearError(nameInput, nameError);
        return true;
    };

    const validateEmail = () => {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            showError(emailInput, emailError, 'Email is required.');
            return false;
        } else if (!emailPattern.test(emailValue)) {
            showError(emailInput, emailError, 'Please enter a valid email address.');
            return false;
        }
        clearError(emailInput, emailError);
        return true;
    };

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        if (isNameValid && isEmailValid) {
            // Send form data to the server 
            console.log('Name:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Message:', document.getElementById('message').value);
            form.reset();
        }
    });
});
