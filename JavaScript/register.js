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


            // ===========================
            // CHECK PASSWORD MATCH
            // ===========================

            if (
                registerPassword.value !==
                confirmPassword.value
            ) {

                alert(
                    "Passwords do not match!"
                );

                return;

            }


            // ===========================
            // GET INPUTS
            // ===========================

            const nameInput =
                document.getElementById("fullname");

            const emailInput =
                document.getElementById("email");


            if (
                !nameInput ||
                !emailInput
            ) {

                alert(
                    "Unable to find registration fields."
                );

                return;

            }


            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim().toLowerCase();

            const password =
                registerPassword.value;


            // ===========================
            // CHECK EMPTY VALUES
            // ===========================

            if (
                name === "" ||
                email === "" ||
                password === ""
            ) {

                alert(
                    "Please fill all required fields."
                );

                return;

            }


            // ===========================
            // GET EXISTING USERS
            // ===========================

            let users = [];


            const savedUsers =
                localStorage.getItem(
                    "registeredUsers"
                );


            if (savedUsers) {

                try {

                    users =
                        JSON.parse(savedUsers);

                } catch (error) {

                    console.log(
                        "Unable to load existing users."
                    );

                    users = [];

                }

            }


            // ===========================
            // MAKE SURE USERS IS ARRAY
            // ===========================

            if (!Array.isArray(users)) {

                users = [];

            }


            // ===========================
            // CHECK DUPLICATE EMAIL
            // ===========================

            const existingUser =
                users.find(function (user) {

                    return (
                        user.email.toLowerCase() ===
                        email
                    );

                });


            if (existingUser) {

                alert(
                    "An account with this email already exists. Please login."
                );

                return;

            }


            // ===========================
            // CREATE NEW USER
            // ===========================

            const registeredUser = {

                name: name,

                email: email,

                password: password

            };


            // ===========================
            // ADD USER TO ARRAY
            // ===========================

            users.push(
                registeredUser
            );


            // ===========================
            // SAVE ALL USERS
            // ===========================

            localStorage.setItem(
                "registeredUsers",
                JSON.stringify(users)
            );


            // ===========================
            // REGISTRATION SUCCESS
            // ===========================

            alert(
                "Registration successful! Please login."
            );


            // ===========================
            // REDIRECT TO LOGIN
            // ===========================

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


// ===========================
// DEBUG
// ===========================

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