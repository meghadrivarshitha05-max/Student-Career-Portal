// ==========================================
// LOGIN PROTECTION
// ==========================================

const isLoggedIn =
    localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {

    window.location.href =
        "login.html";

}


// ==========================================
// PLACEMENT PAGE JAVASCRIPT
// ==========================================

console.log("Placement Page Loaded");


// ==========================================
// GET CURRENT USER
// ==========================================

const currentUserData =
    localStorage.getItem("currentUser");

let currentUser = null;

if (currentUserData) {

    try {

        currentUser =
            JSON.parse(currentUserData);

    } catch (error) {

        console.log(
            "Unable to load current user."
        );

    }

}


// ==========================================
// CHECK CURRENT USER
// ==========================================

if (!currentUser || !currentUser.email) {

    alert(
        "Unable to identify the current user. Please login again."
    );

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUserEmail");

    window.location.href =
        "login.html";

}


// ==========================================
// CURRENT USER EMAIL
// ==========================================

const currentUserEmail =
    currentUser.email.toLowerCase();


// ==========================================
// APPLY FOR PLACEMENT DRIVE
// ==========================================

const applyButtons =
    document.querySelectorAll(".apply-btn");


applyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const company =
            button.getAttribute("data-company");

        const role =
            button.getAttribute("data-role");


        // ===========================
        // CONFIRM APPLICATION
        // ===========================

        const confirmApply =
            confirm(
                "Apply for " +
                role +
                " at " +
                company +
                "?"
            );


        if (!confirmApply) {

            return;

        }


        // ===========================
        // GET ALL USER APPLICATIONS
        // ===========================

        let userApplications = {};

        const savedApplications =
            localStorage.getItem(
                "userPlacementApplications"
            );


        if (savedApplications) {

            try {

                userApplications =
                    JSON.parse(
                        savedApplications
                    );

            } catch (error) {

                console.log(
                    "Unable to load previous applications."
                );

                userApplications = {};

            }

        }


        // ===========================
        // MAKE SURE USER HAS AN ARRAY
        // ===========================

        if (
            !Array.isArray(
                userApplications[currentUserEmail]
            )
        ) {

            userApplications[currentUserEmail] =
                [];

        }


        // ===========================
        // CHECK DUPLICATE APPLICATION
        // ===========================

        const alreadyApplied =
            userApplications[currentUserEmail]
                .some(function (application) {

                    return (
                        application.company ===
                            company &&
                        application.role ===
                            role
                    );

                });


        if (alreadyApplied) {

            alert(
                "You have already applied for " +
                role +
                " at " +
                company +
                "."
            );

            button.textContent =
                "✅ Applied";

            button.disabled = true;

            return;

        }


        // ===========================
        // CREATE APPLICATION
        // ===========================

        const application = {

            company:
                company,

            role:
                role,

            date:
                new Date().toLocaleDateString()

        };


        // ===========================
        // ADD APPLICATION
        // ===========================

        userApplications[currentUserEmail]
            .push(application);


        // ===========================
        // SAVE APPLICATIONS
        // ===========================

        localStorage.setItem(
            "userPlacementApplications",
            JSON.stringify(
                userApplications
            )
        );


        // ===========================
        // SUCCESS MESSAGE
        // ===========================

        alert(
            "Application submitted successfully!\n\n" +
            "Company: " +
            company +
            "\nRole: " +
            role
        );


        // ===========================
        // CHANGE BUTTON
        // ===========================

        button.textContent =
            "✅ Applied";

        button.disabled = true;

    });

});


// ==========================================
// LOAD CURRENT USER'S APPLICATIONS
// ==========================================

const savedApplications =
    localStorage.getItem(
        "userPlacementApplications"
    );


if (savedApplications) {

    try {

        const userApplications =
            JSON.parse(
                savedApplications
            );


        const applications =
            userApplications[currentUserEmail]
            || [];


        // ===========================
        // DISABLE APPLIED BUTTONS
        // ===========================

        applyButtons.forEach(
            function (button) {

                const company =
                    button.getAttribute(
                        "data-company"
                    );

                const role =
                    button.getAttribute(
                        "data-role"
                    );


                const alreadyApplied =
                    applications.some(
                        function (application) {

                            return (
                                application.company ===
                                    company &&
                                application.role ===
                                    role
                            );

                        }
                    );


                if (alreadyApplied) {

                    button.textContent =
                        "✅ Applied";

                    button.disabled =
                        true;

                }

            }
        );


    } catch (error) {

        console.log(
            "Unable to load placement applications."
        );

    }

}


console.log(
    "Placement JavaScript Ready"
);