// ===========================
// STUDENT DASHBOARD
// ===========================

console.log("Student Dashboard Loaded");

const studentName = "Varshitha";

const welcomeHeading = document.getElementById("welcomeHeading");

if (welcomeHeading) {
    welcomeHeading.textContent = `Welcome, ${studentName}!`;
}

// ===========================
// LIVE DATE & TIME
// ===========================

const currentDate = document.getElementById("currentDate");
const currentTime = document.getElementById("currentTime");

function updateDateTime() {

    const now = new Date();

    if (currentDate) {

        currentDate.textContent =
            "📅 " + now.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });

    }

    if (currentTime) {

        currentTime.textContent =
            "🕒 " + now.toLocaleTimeString();

    }

}

updateDateTime();

setInterval(updateDateTime, 1000);

// ===========================
// NOTIFICATIONS
// ===========================

const notifications = [

    "📢 New HTML Assignment uploaded.",

    "💼 TCS Placement Drive opens tomorrow.",

    "📚 JavaScript course has been updated.",

    "🎉 Congratulations! Your profile is 80% complete."

];

const notificationList = document.getElementById("notificationList");

if (notificationList) {

    notifications.forEach(function(notification) {

        const li = document.createElement("li");

        li.textContent = notification;

        notificationList.appendChild(li);

    });

}

// ==========================================
// STUDENT DASHBOARD QUICK ACTIONS
// ==========================================

const profileBtn = document.getElementById("profileBtn");
const courseBtn = document.getElementById("courseBtn");
const placementBtn = document.getElementById("placementBtn");
const logoutBtn = document.getElementById("logoutBtn");


// My Profile
if (profileBtn) {

    profileBtn.addEventListener("click", function () {

        window.location.href = "student-portal.html";

    });

}


// Courses
if (courseBtn) {

    courseBtn.addEventListener("click", function () {

        window.location.href = "courses.html";

    });

}


// Placements
if (placementBtn) {

    placementBtn.addEventListener("click", function () {

        window.location.href = "placement.html";

    });

}


// Logout
if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmLogout =
            confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            window.location.href = "login.html";

        }

    });

}

// ==========================================
// ENROLLED COURSE
// ==========================================

const enrolledCourse =
    document.getElementById("enrolledCourse");

if (enrolledCourse) {

    const selectedCourse =
        localStorage.getItem("selectedCourse");

    if (selectedCourse) {

        enrolledCourse.textContent =
            "🎓 Currently Enrolled: " +
            selectedCourse;

    }

}

