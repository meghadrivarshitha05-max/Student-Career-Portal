// ===========================
// REGISTER PAGE JAVASCRIPT
// ===========================

console.log("register.js loaded");


// ===========================
// PASSWORD ELEMENTS
// ===========================

const registerPassword =
    document.getElementById("password");

const confirmPassword =
    document.getElementById("confirmPassword");

const passwordMessage =
    document.getElementById("passwordMessage");

const registerForm =
    document.getElementById("registerForm");


// ===========================
// PASSWORD MATCH
// ===========================

if (
    registerPassword &&
    confirmPassword &&
    passwordMessage
) {

    function checkPasswordMatch() {

        if (confirmPassword.value === "") {

            passwordMessage.textContent = "";

            return;
        }


        if (
            registerPassword.value ===
            confirmPassword.value
        ) {

            passwordMessage.textContent =
                "✅ Passwords Match";

            passwordMessage.style.color =
                "green";

        } else {

            passwordMessage.textContent =
                "❌ Passwords Do Not Match";

            passwordMessage.style.color =
                "red";

        }

    }


    registerPassword.addEventListener(
        "input",
        checkPasswordMatch
    );


    confirmPassword.addEventListener(
        "input",
        checkPasswordMatch
    );

}


// ===========================
// PASSWORD SHOW / HIDE
// ===========================

const togglePassword1 =
    document.getElementById("togglePassword1");

if (
    registerPassword &&
    togglePassword1
) {

    togglePassword1.addEventListener(
        "click",
        function () {

            if (
                registerPassword.type ===
                "password"
            ) {

                registerPassword.type =
                    "text";

                togglePassword1.textContent =
                    "🙈";

            } else {

                registerPassword.type =
                    "password";

                togglePassword1.textContent =
                    "👁️";

            }

        }
    );

}


// ===========================
// CONFIRM PASSWORD SHOW / HIDE
// ===========================

const togglePassword2 =
    document.getElementById("togglePassword2");

if (
    confirmPassword &&
    togglePassword2
) {

    togglePassword2.addEventListener(
        "click",
        function () {

            if (
                confirmPassword.type ===
                "password"
            ) {

                confirmPassword.type =
                    "text";

                togglePassword2.textContent =
                    "🙈";

            } else {

                confirmPassword.type =
                    "password";

                togglePassword2.textContent =
                    "👁️";

            }

        }
    );

}


// ===========================
// REGISTER ACCOUNT
// ===========================

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Check password match

            if (
                registerPassword.value !==
                confirmPassword.value
            ) {

                alert(
                    "Passwords do not match!"
                );

                return;

            }


            // Get email

            const emailInput =
                document.getElementById("email");


            if (!emailInput) {

                return;

            }


            // Save account

           const nameInput =
    document.getElementById("fullname");

const registeredUser = {

    name:
        nameInput.value.trim(),

    email:
        emailInput.value.trim(),

    password:
        registerPassword.value

};


            localStorage.setItem(
                "registeredUser",
                JSON.stringify(
                    registeredUser
                )
            );


            // Registration successful

            alert(
                "Registration successful! Please login."
            );


            // Redirect to login

            setTimeout(
                function () {

                    window.location.href =
                        "login.html";

                },
                500
            );

        }
    );

}


console.log(
    document.getElementById("password")
);

console.log(
    document.getElementById("togglePassword1")
);

console.log(
    document.getElementById("confirmPassword")
);

console.log(
    document.getElementById("togglePassword2")
);

console.log(
    "Registration JavaScript Ready"
);