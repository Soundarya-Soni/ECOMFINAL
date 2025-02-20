// scripts/script.js
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
  