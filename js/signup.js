
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
  
    if (!fullName || !email || !password || !confirmPassword || !phone || !gender) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    if (phone.length < 10 || !/^\d+$/.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
  
    // If all validations pass
    alert("Account successfully created!");
    // You can proceed to submit to a server or reset the form
  });
  