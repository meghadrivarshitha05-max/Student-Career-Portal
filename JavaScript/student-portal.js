// ==========================================
// STUDENT PORTAL JAVASCRIPT
// ==========================================

console.log("Student Portal Loaded");


// ==========================================
// 1. LIVE DATE AND TIME
// ==========================================

function updateDateTime() {

    const dateElement = document.getElementById("currentDate");
    const timeElement = document.getElementById("currentTime");

    const now = new Date();

    if (dateElement) {
        dateElement.textContent =
            "Date: " + now.toLocaleDateString();
    }

    if (timeElement) {
        timeElement.textContent =
            "Time: " + now.toLocaleTimeString();
    }

}

updateDateTime();

setInterval(updateDateTime, 1000);


// ==========================================
// 2. PROFILE EDIT AND SAVE
// ==========================================

const editBtn = document.getElementById("editProfileBtn");
const saveBtn = document.getElementById("saveProfileBtn");

const profileName = document.getElementById("profileName");


// Edit Profile
if (editBtn && profileName) {

    editBtn.addEventListener("click", function () {

        profileName.disabled = false;

        profileName.focus();

        alert("You can now edit your profile.");

    });

}


// Save Profile
if (saveBtn && profileName) {

    saveBtn.addEventListener("click", function () {

        const studentProfile = {
            name: profileName.value.trim()
        };

        if (studentProfile.name === "") {

            alert("Please enter your name.");

            profileName.focus();

            return;
        }

        localStorage.setItem(
            "studentProfile",
            JSON.stringify(studentProfile)
        );

        profileName.disabled = true;

        alert("Profile Saved Successfully!");

    });

}


// ==========================================
// 3. LOAD SAVED PROFILE
// ==========================================

if (profileName) {

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

            console.log("Unable to load saved profile.");

        }

    }

}


// ==========================================
// 4. RESUME MANAGEMENT
// ==========================================

const resumeInput =
    document.getElementById("resume");

const resumeStatus =
    document.getElementById("resumeStatus");

const viewResumeBtn =
    document.getElementById("viewResumeBtn");

const replaceResumeBtn =
    document.getElementById("replaceResumeBtn");


// Load saved resume name
const savedResume =
    localStorage.getItem("resumeName");

if (savedResume && resumeStatus) {

    resumeStatus.textContent =
        "📄 Current Resume: " + savedResume;

    resumeStatus.style.color = "green";

}


// Upload Resume
if (resumeInput) {

    resumeInput.addEventListener("change", function () {

        if (resumeInput.files.length === 0) {
            return;
        }

        const selectedFile =
            resumeInput.files[0];


        // Check PDF
        if (selectedFile.type !== "application/pdf") {

            alert("Please select a PDF file.");

            resumeInput.value = "";

            return;
        }


        // Check file size
        const maxSize =
            5 * 1024 * 1024;

        if (selectedFile.size > maxSize) {

            alert("Resume must be less than 5 MB.");

            resumeInput.value = "";

            return;
        }


        // Save resume filename
        localStorage.setItem(
            "resumeName",
            selectedFile.name
        );


        // Show resume status
        if (resumeStatus) {

            resumeStatus.textContent =
                "📄 Current Resume: " +
                selectedFile.name;

            resumeStatus.style.color = "green";

        }

        alert("Resume uploaded successfully!");

    });

}


// ==========================================
// 5. VIEW RESUME
// ==========================================

if (viewResumeBtn) {

    viewResumeBtn.addEventListener("click", function () {

        const resumeName =
            localStorage.getItem("resumeName");

        if (resumeName) {

            alert(
                "Your current resume is:\n\n" +
                resumeName
            );

        } else {

            alert(
                "No resume has been uploaded yet."
            );

        }

    });

}


// ==========================================
// 6. REPLACE RESUME
// ==========================================

if (replaceResumeBtn && resumeInput) {

    replaceResumeBtn.addEventListener("click", function () {

        resumeInput.click();

    });

}


// ==========================================
// 7. NOTIFICATIONS
// ==========================================

const notificationList =
    document.getElementById("notificationList");

if (notificationList) {

    const notifications = [

        "📢 New course material has been uploaded.",

        "💼 TCS placement registration is open.",

        "📄 Please keep your resume updated.",

        "📝 Check your upcoming assignment deadlines."

    ];


    notifications.forEach(function (notification) {

        const listItem =
            document.createElement("li");

        listItem.textContent =
            notification;

        notificationList.appendChild(listItem);

    });

}


// ==========================================
// STUDENT PORTAL READY
// ==========================================

console.log("Student Portal JavaScript Ready");

// ==========================================
// DARK MODE
// ==========================================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☀️ Light Mode";

            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.textContent = "🌙 Dark Mode";

            localStorage.setItem("theme", "light");

        }

    });

}


// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀️ Light Mode";
    }

}

// ==========================================
// RESUME MANAGEMENT
// ==========================================

const resumeInput =
    document.getElementById("resume");


if (resumeInput) {

    resumeInput.addEventListener("change", function () {

        const file =
            resumeInput.files[0];


        if (!file) {
            return;
        }


        // Check PDF
        if (file.type !== "application/pdf") {

            alert(
                "Please select a PDF file only."
            );

            resumeInput.value = "";

            return;

        }


        // Save resume filename
        localStorage.setItem(
            "resumeName",
            file.name
        );


        alert(
            "Resume uploaded successfully!\n\n" +
            file.name
        );

    });

}


// ==========================================
// LOAD SAVED RESUME
// ==========================================

const savedResume =
    localStorage.getItem("resumeName");


if (savedResume && resumeInput) {

    const resumeMessage =
        document.createElement("p");

    resumeMessage.textContent =
        "📄 Current Resume: " + savedResume;

    resumeMessage.style.fontWeight =
        "bold";

    resumeInput.parentNode.insertBefore(
        resumeMessage,
        resumeInput.nextSibling
    );

}

// ==========================================
// VIEW RESUME
// ==========================================

const viewResumeBtn =
    document.getElementById("viewResumeBtn");

if (viewResumeBtn) {

    viewResumeBtn.addEventListener("click", function () {

        const savedResume =
            localStorage.getItem("resumeName");

        if (!savedResume) {

            alert(
                "No resume has been uploaded yet."
            );

            return;

        }

        alert(
            "Current Resume:\n\n" +
            savedResume
        );

    });

}


// ==========================================
// REPLACE RESUME
// ==========================================

const replaceResumeBtn =
    document.getElementById("replaceResumeBtn");

if (replaceResumeBtn) {

    replaceResumeBtn.addEventListener("click", function () {

        if (resumeInput) {

            resumeInput.click();

        }

    });

}

// ==========================================
// NOTIFICATIONS
// ==========================================

const notificationList =
    document.getElementById("notificationList");

if (notificationList) {

    const notifications = [

        "📢 TCS Placement Registration closes this week.",

        "🎓 New course: JavaScript is now available.",

        "📄 Please keep your latest resume updated.",

        "💼 New placement drives are available."

    ];


    notifications.forEach(function (notification) {

        const listItem =
            document.createElement("li");

        listItem.textContent =
            notification;

        notificationList.appendChild(
            listItem
        );

    });

}