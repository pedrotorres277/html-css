document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form submission
  
    // Get username and password input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Simple validation
    if (username === 'user' && password === 'password') {
      document.getElementById('message').textContent = 'Login successful!';

    } else {
      document.getElementById('message').textContent = 'Invalid username or password.';
    }
  });

 