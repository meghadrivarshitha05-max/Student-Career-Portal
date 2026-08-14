// ===========================
// LOGIN PASSWORD SHOW / HIDE
// ===========================

console.log("login.js loaded");

const loginPassword =
    document.getElementById("login-password");

const togglePassword =
    document.getElementById("togglePassword");

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

const strength =
    document.getElementById("passwordStrength");

if (loginPassword && strength) {

    loginPassword.addEventListener("input", function () {

        const password =
            loginPassword.value;

        if (password.length === 0) {

            strength.textContent = "";

        }

        else if (password.length < 6) {

            strength.textContent =
                "🔴 Weak Password";

            strength.style.color = "red";

        }

        else if (password.length < 10) {

            strength.textContent =
                "🟡 Medium Password";

            strength.style.color = "orange";

        }

        else {

            strength.textContent =
                "🟢 Strong Password";

            strength.style.color = "green";

        }

    });

}


// ===========================
// LOGIN VALIDATION
// ===========================

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("login-email");

        const message =
            document.getElementById("loginMessage");


        // Remove old borders

        email.style.border = "";

        loginPassword.style.border = "";


        // ===========================
        // CHECK EMPTY FIELDS
        // ===========================

        if (
            email.value.trim() === "" ||
            loginPassword.value.trim() === ""
        ) {

            message.textContent =
                "Please fill all fields.";

            message.style.color = "red";


            if (email.value.trim() === "") {

                email.style.border =
                    "2px solid red";

            }


            if (loginPassword.value.trim() === "") {

                loginPassword.style.border =
                    "2px solid red";

            }

            return;

        }


        // ===========================
        // CHECK EMAIL FORMAT
        // ===========================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email.value.trim())) {

            message.textContent =
                "Please enter a valid email address.";

            message.style.color = "red";

            email.style.border =
                "2px solid red";

            return;

        }


        // ===========================
        // GET ALL REGISTERED USERS
        // ===========================

        const savedUsers =
            localStorage.getItem("registeredUsers");


        if (!savedUsers) {

            message.textContent =
                "No registered account found. Please register first.";

            message.style.color = "red";

            return;

        }


        let users;

        try {

            users =
                JSON.parse(savedUsers);

        } catch (error) {

            console.log(
                "Unable to load registered users."
            );

            message.textContent =
                "Unable to load registered accounts.";

            message.style.color = "red";

            return;

        }


        // Make sure users is an array

        if (!Array.isArray(users)) {

            message.textContent =
                "No registered account found. Please register first.";

            message.style.color = "red";

            return;

        }


        // ===========================
        // FIND CURRENT USER
        // ===========================

        const enteredEmail =
            email.value.trim().toLowerCase();

        const enteredPassword =
            loginPassword.value;


        const registeredUser =
            users.find(function (user) {

                return (
                    user.email.toLowerCase() ===
                        enteredEmail &&
                    user.password ===
                        enteredPassword
                );

            });


        // ===========================
        // INVALID LOGIN
        // ===========================

        if (!registeredUser) {

            message.textContent =
                "❌ Incorrect email or password.";

            message.style.color = "red";


            email.style.border =
                "2px solid red";

            loginPassword.style.border =
                "2px solid red";

            return;

        }


        // ===========================
        // SUCCESSFUL LOGIN
        // ===========================

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );


        // Save currently logged-in user

        localStorage.setItem(
            "currentUser",
            JSON.stringify(registeredUser)
        );


        // Also save current user's email separately

        localStorage.setItem(
            "currentUserEmail",
            registeredUser.email
        );


        message.textContent =
            "✅ Login Successful!";

        message.style.color =
            "green";


        // ===========================
        // OPEN STUDENT DASHBOARD
        // ===========================

        setTimeout(function () {

            window.location.href =
                "student-dashboard.html";

        }, 500);

    });

}


// ===========================
// REMOVE RED BORDER - EMAIL
// ===========================

const emailInput =
    document.getElementById("login-email");

if (emailInput) {

    emailInput.addEventListener("input", function () {

        emailInput.style.border = "";

    });

}


// ===========================
// REMOVE RED BORDER - PASSWORD
// ===========================

if (loginPassword) {

    loginPassword.addEventListener("input", function () {

        loginPassword.style.border = "";

    });

}


console.log("Login JavaScript Ready");