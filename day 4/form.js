document.getElementById("userForm").addEventListener("submit", function(event) {
    let isValid = true;
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }
    if (email.trim() === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Valid email is required.";
        isValid = false;
    }
    if (password.trim() === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    }
    
    if (!isValid) {
        event.preventDefault();
    }
});