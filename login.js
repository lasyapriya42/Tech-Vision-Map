document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    window.location.href = "index.html"; // Redirect to the home page
});

document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle signup logic here
    window.location.href = "index.html"; // Redirect to the home page
});

document.getElementById('switch-to-signup').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('switch-to-login').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    // Handle forgot password logic here
    alert("Password recovery process initiated."); // Placeholder for password recovery logic
});
