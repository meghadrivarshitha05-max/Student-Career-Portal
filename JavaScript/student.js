// ==========================================
// STUDENT DASHBOARD
// ==========================================

console.log("Student Dashboard Loaded");

// ==========================================
// LOGIN PROTECTION
// ==========================================

const isLoggedIn =
    localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {

    window.location.href =
        "login.html";

}

// ===========================
// DYNAMIC STUDENT NAME
// ===========================

const savedUser =
    localStorage.getItem("registeredUser");

let studentName = "Student";

if (savedUser) {

    try {

        const registeredUser =
            JSON.parse(savedUser);

        if (registeredUser.name) {

            studentName =
                registeredUser.name;

        }

    } catch (error) {

        console.log(
            "Unable to load student name."
        );

    }

}

const welcomeHeading =
    document.getElementById("welcomeHeading");

if (welcomeHeading) {

    welcomeHeading.textContent =
        `Welcome, ${studentName}! 👋`;

}


// ==========================================
// LIVE DATE & TIME
// ==========================================

const currentDate =
    document.getElementById("currentDate");

const currentTime =
    document.getElementById("currentTime");


function updateDateTime() {

    const now = new Date();


    if (currentDate) {

        currentDate.textContent =
            "📅 " +
            now.toLocaleDateString("en-US", {

                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"

            });

    }


    if (currentTime) {

        currentTime.textContent =
            "🕒 " +
            now.toLocaleTimeString();

    }

}


updateDateTime();

setInterval(updateDateTime, 1000);


// ==========================================
// NOTIFICATIONS
// ==========================================

const notifications = [

    "📢 New HTML Assignment uploaded.",

    "💼 TCS Placement Drive opens tomorrow.",

    "📚 JavaScript course has been updated.",

    "🎉 Congratulations! Your profile is 80% complete."

];


const notificationList =
    document.getElementById("notificationList");


if (notificationList) {

    notificationList.innerHTML = "";

    notifications.forEach(function (notification) {

        const li =
            document.createElement("li");

        li.textContent =
            notification;

        notificationList.appendChild(li);

    });

}


// ==========================================
// ENROLLED COURSES
// ==========================================

const enrolledCourse =
    document.getElementById("enrolledCourse");


if (enrolledCourse) {

    const enrolledCourses =
        JSON.parse(
            localStorage.getItem("enrolledCourses")
        ) || [];


    if (enrolledCourses.length === 0) {

        enrolledCourse.textContent =
            "You have not enrolled in any course yet.";

    }

    else {

        enrolledCourse.innerHTML = "";


        enrolledCourses.forEach(function (course) {

            const courseItem =
                document.createElement("p");

            courseItem.textContent =
                "🎓 " + course;

            enrolledCourse.appendChild(
                courseItem
            );

        });

    }

}


// ==========================================
// PLACEMENT APPLICATION
// ==========================================

const placementApplication =
    document.getElementById("placementApplication");


if (placementApplication) {

    const savedApplication =
        localStorage.getItem("placementApplication");


    if (savedApplication) {

        try {

            const application =
                JSON.parse(savedApplication);


            placementApplication.textContent =
                "💼 Applied for " +
                application.role +
                " at " +
                application.company +
                " on " +
                application.date;

        }

        catch (error) {

            console.log(
                "Unable to load placement application."
            );

        }

    }

}


// ==========================================
// QUICK ACTION BUTTONS
// ==========================================

const profileBtn =
    document.getElementById("profileBtn");

const courseBtn =
    document.getElementById("courseBtn");

const placementBtn =
    document.getElementById("placementBtn");

const logoutBtn =
    document.getElementById("logoutBtn");


// My Profile

if (profileBtn) {

    profileBtn.addEventListener(
        "click",
        function () {

            window.location.href =
                "student-portal.html";

        }
    );

}


// Courses

if (courseBtn) {

    courseBtn.addEventListener(
        "click",
        function () {

            window.location.href =
                "courses.html";

        }
    );

}


// Placements

if (placementBtn) {

    placementBtn.addEventListener(
        "click",
        function () {

            window.location.href =
                "placement.html";

        }
    );

}


// Logout

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmLogout =
            confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            localStorage.removeItem("isLoggedIn");

            window.location.href =
                "login.html";

        }

    });

}


// ==========================================
// DYNAMIC COURSE COUNT
// ==========================================

const courseCount =
    document.getElementById("courseCount");


if (courseCount) {

    const enrolledCourses =
        JSON.parse(
            localStorage.getItem("enrolledCourses")
        ) || [];


    courseCount.textContent =
        enrolledCourses.length
            .toString()
            .padStart(2, "0");

}


// ==========================================
// DYNAMIC PLACEMENT APPLICATION COUNT
// ==========================================

const placementCount =
    document.getElementById("placementCount");


if (placementCount) {

    const savedApplication =
        localStorage.getItem(
            "placementApplication"
        );


    if (savedApplication) {

        placementCount.textContent = "01";

    }

    else {

        placementCount.textContent = "00";

    }

}


console.log("Student Dashboard JavaScript Ready");