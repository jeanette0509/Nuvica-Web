document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  
    alert("Login successful!");
  });
  

  function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
      field.type = "text";
    } else {
      field.type = "password";
    }
  }
  