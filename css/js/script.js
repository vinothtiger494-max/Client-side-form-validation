document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
  
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const age = document.getElementById("age");
    const gender = document.getElementById("gender");
    const terms = document.getElementById("terms");
    const successMessage = document.getElementById("successMessage");
  
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  
    // Full name validation
    if (fullname.value.trim() === "") {
      setError(fullname, "Full name is required");
      valid = false;
    }
  
    // Email validation
    if (!validateEmail(email.value)) {
      setError(email, "Enter a valid email address");
      valid = false;
    }
  
    // Password validation
    if (password.value.length < 6) {
      setError(password, "Password must be at least 6 characters");
      valid = false;
    }
  
    // Confirm password validation
    if (confirmPassword.value !== password.value) {
      setError(confirmPassword, "Passwords do not match");
      valid = false;
    }
  
    // Age validation
    if (age.value < 18) {
      setError(age, "You must be at least 18 years old");
      valid = false;
    }
  
    // Gender validation
    if (gender.value === "") {
      setError(gender, "Please select your gender");
      valid = false;
    }
  
    // Terms checkbox validation
    if (!terms.checked) {
      setError(terms, "You must agree to the terms");
      valid = false;
    }
  
    // If all valid
    if (valid) {
      successMessage.textContent = "Registration successful!";
      successMessage.style.color = "green";
      this.reset();
    } else {
      successMessage.textContent = "";
    }
  });
  
  // Helper functions
  function setError(input, message) {
    const errorElement = input.parentElement.querySelector(".error");
    errorElement.textContent = message;
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }