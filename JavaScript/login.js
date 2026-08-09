// ===========================
// LOGIN PASSWORD SHOW / HIDE
// ===========================
console.log("login.js loaded");

const loginPassword = document.getElementById("login-password");
const togglePassword = document.getElementById("togglePassword");

if (loginPassword && togglePassword) {

    togglePassword.addEventListener("click", function () {

        if (loginPassword.type === "password") {

            loginPassword.type = "text";
            togglePassword.textContent = "🙈";

        } else {

            loginPassword.type = "password";
            togglePassword.textContent = "👁️";

        }

    });

}

// ===========================
// PASSWORD STRENGTH
// ===========================

const strength = document.getElementById("passwordStrength");

if (loginPassword && strength) {

    loginPassword.addEventListener("input", function () {

        let password = loginPassword.value;

        if (password.length === 0) {

            strength.textContent = "";

        }

        else if (password.length < 6) {

            strength.textContent = "🔴 Weak Password";
            strength.style.color = "red";

        }

        else if (password.length < 10) {

            strength.textContent = "🟡 Medium Password";
            strength.style.color = "orange";

        }

        else {

            strength.textContent = "🟢 Strong Password";
            strength.style.color = "green";

        }

    });

}

// ===========================
// LOGIN VALIDATION
// ===========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("login-email");
        const message = document.getElementById("loginMessage");

        email.style.border = "";
        loginPassword.style.border = "";

        if (email.value.trim() === "" || loginPassword.value.trim() === "") {

            message.textContent = "Please fill all fields.";
            message.style.color = "red";

            if (email.value.trim() === "") {

                email.style.border = "2px solid red";

            }

            if (loginPassword.value.trim() === "") {

                loginPassword.style.border = "2px solid red";

            }

            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {

            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";

            email.style.border = "2px solid red";

            return;

        }

        message.textContent = "✅ Login Successful!";
        message.style.color = "green";
        localStorage.setItem("isLoggedIn", "true");

    });

}

// ===========================
// REMOVE RED BORDER
// ===========================

const emailInput = document.getElementById("login-email");

if (emailInput) {

    emailInput.addEventListener("input", function () {

        emailInput.style.border = "";

    });

}

if (loginPassword) {

    loginPassword.addEventListener("input", function () {

        loginPassword.style.border = "";

    });

}