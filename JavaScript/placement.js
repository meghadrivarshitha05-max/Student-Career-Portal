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

let currentUserEmail = null;

if (currentUserData) {

    try {

        const currentUser =
            JSON.parse(currentUserData);

        if (currentUser.email) {

            currentUserEmail =
                currentUser.email.toLowerCase();

        }

    } catch (error) {

        console.log(
            "Unable to load current user."
        );

    }

}


// ==========================================
// APPLY FOR PLACEMENT DRIVE
// ==========================================

const applyButtons =
    document.querySelectorAll(".apply-btn");


applyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Check current user

        if (!currentUserEmail) {

            alert(
                "Unable to identify the logged-in student."
            );

            return;

        }


        const company =
            button.getAttribute("data-company");

        const role =
            button.getAttribute("data-role");


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


        // ==========================================
        // CREATE APPLICATION
        // ==========================================

        const application = {

            company: company,

            role: role,

            date:
                new Date().toLocaleDateString()

        };


        // ==========================================
        // GET ALL USER APPLICATIONS
        // ==========================================

        const savedApplications =
            localStorage.getItem(
                "userPlacementApplications"
            );


        let userApplications = {};


        if (savedApplications) {

            try {

                userApplications =
                    JSON.parse(
                        savedApplications
                    );

            } catch (error) {

                console.log(
                    "Unable to load saved applications."
                );

                userApplications = {};

            }

        }


        // ==========================================
        // GET CURRENT USER'S APPLICATIONS
        // ==========================================

        const applications =
            userApplications[currentUserEmail] || [];


        // ==========================================
        // CHECK DUPLICATE APPLICATION
        // ==========================================

        const alreadyApplied =
            applications.some(function (item) {

                return (
                    item.company === company &&
                    item.role === role
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

            return;

        }


        // ==========================================
        // SAVE APPLICATION
        // ==========================================

        applications.push(application);

        userApplications[currentUserEmail] =
            applications;


        localStorage.setItem(
            "userPlacementApplications",
            JSON.stringify(
                userApplications
            )
        );


        // ==========================================
        // UPDATE BUTTON
        // ==========================================

        alert(
            "Application submitted successfully!\n\n" +
            "Company: " +
            company +
            "\nRole: " +
            role
        );


        button.textContent =
            "✅ Applied";

        button.disabled = true;

    });

});


// ==========================================
// LOAD CURRENT USER'S APPLICATIONS
// ==========================================

if (currentUserEmail) {

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


            // Mark only this user's applications

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

}


console.log(
    "Placement JavaScript Ready"
);