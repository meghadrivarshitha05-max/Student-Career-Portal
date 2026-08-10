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


        // Save application
        const application = {

            company: company,

            role: role,

            date: new Date().toLocaleDateString()

        };


        localStorage.setItem(
            "placementApplication",
            JSON.stringify(application)
        );


        alert(
            "Application submitted successfully!\n\n" +
            "Company: " + company +
            "\nRole: " + role
        );


        // Change button
        button.textContent =
            "✅ Applied";

        button.disabled = true;

    });

});


// ==========================================
// LOAD PREVIOUS APPLICATION
// ==========================================

const savedApplication =
    localStorage.getItem("placementApplication");


if (savedApplication) {

    try {

        const application =
            JSON.parse(savedApplication);


        applyButtons.forEach(function (button) {

            const company =
                button.getAttribute("data-company");

            const role =
                button.getAttribute("data-role");


            if (
                company === application.company &&
                role === application.role
            ) {

                button.textContent =
                    "✅ Applied";

                button.disabled = true;

            }

        });


    } catch (error) {

        console.log(
            "Unable to load placement application."
        );

    }

}


console.log("Placement JavaScript Ready");