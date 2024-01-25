function validateForm() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Simple email format validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format');
            return;
        }

        // Password length validation
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        // You can add more complex password requirements if needed

        // If all validations pass, you can proceed with form submission or other actions
        window.alert('Login successfully!');
         window.location.href = "home.html";
        // Uncomment the line below to submit the form programmatically
        // document.getElementById('loginForm').submit();
    }

        function redirectToNextPage() {
        // You can replace 'next-page.html' with the URL of the page you want to redirect to
        window.location.href = 'createaccount.html';
        }