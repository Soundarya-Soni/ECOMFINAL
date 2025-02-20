const express = require('express');
const app = express();
const port = 3000;

// Serve HTML, CSS, and JavaScript in one file
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Registration Page</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          margin: 0;
          padding: 0;
        }

        .container {
          width: 100%;
          max-width: 500px;
          margin: 50px auto;
          background-color: white;
          padding: 30px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #333;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          font-weight: bold;
          display: block;
          margin-bottom: 5px;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="date"] {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
        }

        .error {
          color: red;
          font-size: 12px;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #4CAF50;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Registration Form</h2>
        <form id="registrationForm" onsubmit="return validateForm()">
          <div class="form-group">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required>
            <div class="error" id="nameError"></div>
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <div class="error" id="emailError"></div>
          </div>

          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <div class="error" id="passwordError"></div>
          </div>

          <div class="form-group">
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required>
            <div class="error" id="dobError"></div>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>

      <script>
        function validateForm() {
          let isValid = true;

          // Reset previous errors
          document.getElementById("nameError").innerText = "";
          document.getElementById("emailError").innerText = "";
          document.getElementById("passwordError").innerText = "";
          document.getElementById("dobError").innerText = "";

          // Name Validation
          const name = document.getElementById("name").value;
          if (name.trim() === "") {
            document.getElementById("nameError").innerText = "Full Name is required.";
            isValid = false;
          }

          // Email Validation
          const email = document.getElementById("email").value;
          const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Please enter a valid email.";
            isValid = false;
          }

          // Password Validation
          const password = document.getElementById("password").value;
          if (password.length < 6) {
            document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
            isValid = false;
          }

          // Date of Birth Validation
          const dob = document.getElementById("dob").value;
          if (dob === "") {
            document.getElementById("dobError").innerText = "Date of Birth is required.";
            isValid = false;
          }

          return isValid;
        }
      </script>
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
