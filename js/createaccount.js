function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var errorMessages = document.getElementById('errorMessages');

        // Simple name validation
        if (name.trim() === '') {
            errorMessages.innerText = 'Please enter your name';
            return;
        }

        // Simple email format validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessages.innerText = 'Invalid email format';
            return;
        }

        // Password length validation
        if (password.length < 6) {
            errorMessages.innerText = 'Password must be at least 6 characters long';
            return;
        }

        // Password match validation
        if (password !== confirmPassword) {
            errorMessages.innerText = 'Passwords do not match';
            return;
        }

        // If all validations pass, you can proceed with form submission or other actions
        errorMessages.innerText = '';
        window.alert('Account created successfully!');
          window.location.href = "home.html";
        // Uncomment the line below to submit the form programmatically
        // document.getElementById('signupForm').submit();
       // Redirect to the next page when OK is clicked
      
    }