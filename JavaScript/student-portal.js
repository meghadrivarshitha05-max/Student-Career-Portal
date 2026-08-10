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
// STUDENT PORTAL JAVASCRIPT
// ==========================================

console.log("Student Portal Loaded");


// ==========================================
// 1. LIVE DATE AND TIME
// ==========================================

function updateDateTime() {

    const dateElement =
        document.getElementById("currentDate");

    const timeElement =
        document.getElementById("currentTime");

    const now = new Date();


    if (dateElement) {

        dateElement.textContent =
            "📅 " +
            now.toLocaleDateString("en-US", {

                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"

            });

    }


    if (timeElement) {

        timeElement.textContent =
            "🕒 " +
            now.toLocaleTimeString();

    }

}


updateDateTime();

setInterval(updateDateTime, 1000);


// ==========================================
// 2. PROFILE ELEMENTS
// ==========================================

const editBtn =
    document.getElementById("editProfileBtn");

const saveBtn =
    document.getElementById("saveProfileBtn");

const profileName =
    document.getElementById("profileName");

const profileEmail =
    document.getElementById("profileEmail");

const profilePhone =
    document.getElementById("profilePhone");

const profileCollege =
    document.getElementById("profileCollege");

const profileBranch =
    document.getElementById("profileBranch");

const profileYear =
    document.getElementById("profileYear");


// ==========================================
// 3. PROFILE INPUTS
// ==========================================

const profileInputs = [

    profileName,
    profileEmail,
    profilePhone,
    profileCollege,
    profileBranch,
    profileYear

];


// ==========================================
// 4. EDIT PROFILE
// ==========================================

if (editBtn) {

    editBtn.addEventListener("click", function () {

        profileInputs.forEach(function (input) {

            if (input) {

                input.disabled = false;

            }

        });


        if (profileName) {

            profileName.focus();

        }


        alert(
            "You can now edit your profile."
        );

    });

}


// ==========================================
// 5. SAVE PROFILE
// ==========================================

if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        if (
            profileName &&
            profileName.value.trim() === ""
        ) {

            alert(
                "Please enter your name."
            );

            profileName.focus();

            return;

        }


        const studentProfile = {

            name:
                profileName
                    ? profileName.value.trim()
                    : "",

            email:
                profileEmail
                    ? profileEmail.value.trim()
                    : "",

            phone:
                profilePhone
                    ? profilePhone.value.trim()
                    : "",

            college:
                profileCollege
                    ? profileCollege.value.trim()
                    : "",

            branch:
                profileBranch
                    ? profileBranch.value.trim()
                    : "",

            year:
                profileYear
                    ? profileYear.value.trim()
                    : ""

        };


        localStorage.setItem(

            "studentProfile",

            JSON.stringify(studentProfile)

        );


        profileInputs.forEach(function (input) {

            if (input) {

                input.disabled = true;

            }

        });


        alert(
            "Profile Saved Successfully!"
        );


        updateProfileCompletion();

    });

}


// ==========================================
// LOAD STUDENT PROFILE
// ==========================================

if (profileName) {

    const savedUser =
        localStorage.getItem("registeredUser");

    if (savedUser) {

        try {

            const registeredUser =
                JSON.parse(savedUser);

            if (registeredUser.name) {

                profileName.value =
                    registeredUser.name;

            }

            const profileEmail =
    document.getElementById("profileEmail");

if (registeredUser.email && profileEmail) {

    profileEmail.value =
        registeredUser.email;

}

        } catch (error) {

            console.log(
                "Unable to load registered user."
            );

        }

    }


    // Load manually saved profile if available

    const savedProfile =
        localStorage.getItem("studentProfile");

    if (savedProfile) {

        try {

            const studentProfile =
                JSON.parse(savedProfile);

            if (studentProfile.name) {

                profileName.value =
                    studentProfile.name;

            }

        } catch (error) {

            console.log(
                "Unable to load saved profile."
            );

        }

    }

}

// ==========================================
// 7. RESUME ELEMENTS
// ==========================================

const resumeInput =
    document.getElementById("resume");

const resumeStatus =
    document.getElementById("resumeStatus");

const viewResumeBtn =
    document.getElementById("viewResumeBtn");

const replaceResumeBtn =
    document.getElementById("replaceResumeBtn");


// ==========================================
// 8. LOAD SAVED RESUME
// ==========================================

const savedResume =
    localStorage.getItem("resumeName");


if (savedResume && resumeStatus) {

    resumeStatus.textContent =
        "📄 Current Resume: " +
        savedResume;

    resumeStatus.style.color =
        "green";

}


// ==========================================
// 9. RESUME UPLOAD
// ==========================================

if (resumeInput) {

    resumeInput.addEventListener(
        "change",
        function () {

            if (
                resumeInput.files.length === 0
            ) {

                return;

            }


            const selectedFile =
                resumeInput.files[0];


            // Check PDF

            if (
                selectedFile.type !==
                "application/pdf"
            ) {

                alert(
                    "Please select a PDF file only."
                );

                resumeInput.value = "";

                return;

            }


            // Check file size

            const maxSize =
                5 * 1024 * 1024;


            if (
                selectedFile.size >
                maxSize
            ) {

                alert(
                    "Resume must be less than 5 MB."
                );

                resumeInput.value = "";

                return;

            }


            // Save filename

            localStorage.setItem(

                "resumeName",

                selectedFile.name

            );


            // Update status

            if (resumeStatus) {

                resumeStatus.textContent =
                    "📄 Current Resume: " +
                    selectedFile.name;

                resumeStatus.style.color =
                    "green";

            }


            alert(
                "Resume uploaded successfully!"
            );


            updateProfileCompletion();

        }
    );

}


// ==========================================
// 10. VIEW RESUME
// ==========================================

if (viewResumeBtn) {

    viewResumeBtn.addEventListener(
        "click",
        function () {

            const currentResume =
                localStorage.getItem(
                    "resumeName"
                );


            if (!currentResume) {

                alert(
                    "No resume has been uploaded yet."
                );

                return;

            }


            alert(

                "Your current resume is:\n\n" +
                currentResume

            );

        }
    );

}


// ==========================================
// 11. REPLACE RESUME
// ==========================================

if (replaceResumeBtn) {

    replaceResumeBtn.addEventListener(
        "click",
        function () {

            if (resumeInput) {

                resumeInput.click();

            }

        }
    );

}


// ==========================================
// 12. NOTIFICATIONS
// ==========================================

const notificationList =
    document.getElementById(
        "notificationList"
    );


if (notificationList) {

    const notifications = [

        "📢 TCS Placement Registration closes this week.",

        "🎓 New course: JavaScript is now available.",

        "📄 Please keep your latest resume updated.",

        "💼 New placement drives are available."

    ];


    notificationList.innerHTML = "";


    notifications.forEach(
        function (notification) {

            const listItem =
                document.createElement("li");


            listItem.textContent =
                notification;


            notificationList.appendChild(
                listItem
            );

        }
    );

}


// ==========================================
// 13. DARK MODE
// ==========================================

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                themeToggle.textContent =
                    "☀️ Light Mode";

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }

            else {

                themeToggle.textContent =
                    "🌙 Dark Mode";

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

        }
    );

}


// Load saved theme

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );


    if (themeToggle) {

        themeToggle.textContent =
            "☀️ Light Mode";

    }

}


// ==========================================
// 14. PROFILE COMPLETION
// ==========================================

function updateProfileCompletion() {

    const profileProgress =
        document.getElementById(
            "profileProgress"
        );

    const profileProgressText =
        document.getElementById(
            "profileProgressText"
        );


    if (
        !profileProgress ||
        !profileProgressText
    ) {

        return;

    }


    let completedFields = 0;

    const totalFields = 8;


    // Name

    if (
        profileName &&
        profileName.value.trim() !== ""
    ) {

        completedFields++;

    }


    // Email

    if (
        profileEmail &&
        profileEmail.value.trim() !== ""
    ) {

        completedFields++;

    }


    // Phone

    if (
        profilePhone &&
        profilePhone.value.trim() !== ""
    ) {

        completedFields++;

    }


    // College

    if (
        profileCollege &&
        profileCollege.value.trim() !== ""
    ) {

        completedFields++;

    }


    // Branch

    if (
        profileBranch &&
        profileBranch.value.trim() !== ""
    ) {

        completedFields++;

    }


    // Year

    if (
        profileYear &&
        profileYear.value.trim() !== ""
    ) {

        completedFields++;

    }


    // Resume

    if (
        localStorage.getItem(
            "resumeName"
        )
    ) {

        completedFields++;

    }


    // Skills

    const skills =
        document.querySelectorAll(
            ".action-grid .action-btn"
        );


    if (skills.length > 0) {

        completedFields++;

    }


    const percentage =
        Math.round(

            (
                completedFields /
                totalFields
            ) * 100

        );


    profileProgress.style.width =
        percentage + "%";


    profileProgressText.textContent =
        "Profile Completion: " +
        percentage +
        "%";

}


// Update profile completion

updateProfileCompletion();


console.log(
    "Student Portal JavaScript Ready"
);