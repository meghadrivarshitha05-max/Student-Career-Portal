// ===========================
// PASSWORD MATCH
// ===========================
console.log("register.js loaded");

const registerPassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordMessage = document.getElementById("passwordMessage");

if (registerPassword && confirmPassword && passwordMessage) {

    function checkPasswordMatch() {

        if (confirmPassword.value === "") {

            passwordMessage.textContent = "";
            return;

        }

        if (registerPassword.value === confirmPassword.value) {

            passwordMessage.textContent = "✅ Passwords Match";
            passwordMessage.style.color = "green";

        }

        else {

            passwordMessage.textContent = "❌ Passwords Do Not Match";
            passwordMessage.style.color = "red";

        }

    }

    registerPassword.addEventListener("input", checkPasswordMatch);
    confirmPassword.addEventListener("input", checkPasswordMatch);

}

// ===========================
// BLOCK REGISTRATION
// ===========================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        if (registerPassword.value !== confirmPassword.value) {

            event.preventDefault();
            alert("Passwords do not match!");

        }

    });

}

// ===========================
// PASSWORD SHOW / HIDE
// ===========================

const togglePassword1 = document.getElementById("togglePassword1");

if (registerPassword && togglePassword1) {

    togglePassword1.addEventListener("click", function () {

        if (registerPassword.type === "password") {

            registerPassword.type = "text";
            togglePassword1.textContent = "🙈";

        } else {

            registerPassword.type = "password";
            togglePassword1.textContent = "👁️";

        }

    });

}

// ===========================
// CONFIRM PASSWORD SHOW / HIDE
// ===========================

const togglePassword2 = document.getElementById("togglePassword2");

if (confirmPassword && togglePassword2) {

    togglePassword2.addEventListener("click", function () {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";
            togglePassword2.textContent = "🙈";

        } else {

            confirmPassword.type = "password";
            togglePassword2.textContent = "👁️";

        }

    });

}

console.log(document.getElementById("password"));
console.log(document.getElementById("togglePassword1"));
console.log(document.getElementById("confirmPassword"));
console.log(document.getElementById("togglePassword2"));