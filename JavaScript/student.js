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

const currentUserData =
    localStorage.getItem("currentUser");

let studentName = "Student";

if (currentUserData) {

    try {

        const currentUser =
            JSON.parse(currentUserData);

        if (currentUser.name) {

            studentName =
                currentUser.name;

        }

    } catch (error) {

        console.log(
            "Unable to load current user."
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

    const currentUserData =
        localStorage.getItem("currentUser");

    if (!currentUserData) {

        enrolledCourse.textContent =
            "You have not enrolled in any course yet.";

    } else {

        try {

            const currentUser =
                JSON.parse(currentUserData);

            const userEmail =
                currentUser.email.toLowerCase();


            // Get all user courses

            const savedCourses =
                localStorage.getItem(
                    "userEnrolledCourses"
                );


            let userCourses = {};

            if (savedCourses) {

                userCourses =
                    JSON.parse(savedCourses);

            }


            // Get current user's courses

            const enrolledCourses =
                userCourses[userEmail] || [];


            // Show courses

            if (enrolledCourses.length === 0) {

                enrolledCourse.textContent =
                    "You have not enrolled in any course yet.";

            } else {

                enrolledCourse.innerHTML = "";


                enrolledCourses.forEach(
                    function (course) {

                        const courseItem =
                            document.createElement("p");

                        courseItem.textContent =
                            "🎓 " + course;

                        enrolledCourse.appendChild(
                            courseItem
                        );

                    }
                );

            }

        } catch (error) {

            console.log(
                "Unable to load enrolled courses."
            );

            enrolledCourse.textContent =
                "You have not enrolled in any course yet.";

        }

    }

}

// ==========================================
// PLACEMENT APPLICATION
// ==========================================

const placementApplication =
    document.getElementById("placementApplication");

if (placementApplication) {

    const currentUserData =
        localStorage.getItem("currentUser");


    if (!currentUserData) {

        placementApplication.textContent =
            "No placement applications yet.";

    } else {

        try {

            const currentUser =
                JSON.parse(currentUserData);

            const userEmail =
                currentUser.email.toLowerCase();


            const savedApplications =
                localStorage.getItem(
                    "userPlacementApplications"
                );


            let userApplications = {};

            if (savedApplications) {

                userApplications =
                    JSON.parse(savedApplications);

            }


            const applications =
                userApplications[userEmail] || [];


            if (applications.length === 0) {

                placementApplication.textContent =
                    "No placement applications yet.";

            } else {

                placementApplication.innerHTML = "";


                applications.forEach(
                    function (application) {

                        const applicationItem =
                            document.createElement("p");

                        applicationItem.textContent =
                            "💼 Applied for " +
                            application.role +
                            " at " +
                            application.company +
                            " on " +
                            application.date;

                        placementApplication.appendChild(
                            applicationItem
                        );

                    }
                );

            }

        } catch (error) {

            console.log(
                "Unable to load placement applications."
            );

            placementApplication.textContent =
                "No placement applications yet.";

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

// ==========================================
// NAVIGATION LOGOUT
// ==========================================

const navLogoutBtn =
    document.getElementById("navLogoutBtn");

if (navLogoutBtn) {

    navLogoutBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const confirmLogout =
                confirm(
                    "Are you sure you want to logout?"
                );

            if (confirmLogout) {

                localStorage.removeItem(
                    "isLoggedIn"
                );

                localStorage.removeItem(
                    "currentUser"
                );

                localStorage.removeItem(
                    "currentUserEmail"
                );

                window.location.href =
                    "login.html";

            }

        }
    );

}


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

    const currentUserData =
        localStorage.getItem("currentUser");


    if (!currentUserData) {

        courseCount.textContent = "00";

    } else {

        try {

            const currentUser =
                JSON.parse(currentUserData);

            const userEmail =
                currentUser.email.toLowerCase();


            const savedCourses =
                localStorage.getItem(
                    "userEnrolledCourses"
                );


            let userCourses = {};

            if (savedCourses) {

                userCourses =
                    JSON.parse(savedCourses);

            }


            const enrolledCourses =
                userCourses[userEmail] || [];


            courseCount.textContent =
                enrolledCourses.length
                    .toString()
                    .padStart(2, "0");


        } catch (error) {

            console.log(
                "Unable to load course count."
            );

            courseCount.textContent = "00";

        }

    }

}

// ==========================================
// DYNAMIC PLACEMENT APPLICATION COUNT
// ==========================================

const placementCount =
    document.getElementById("placementCount");

if (placementCount) {

    const currentUserData =
        localStorage.getItem("currentUser");


    if (!currentUserData) {

        placementCount.textContent = "00";

    } else {

        try {

            const currentUser =
                JSON.parse(currentUserData);

            const userEmail =
                currentUser.email.toLowerCase();


            const savedApplications =
                localStorage.getItem(
                    "userPlacementApplications"
                );


            let userApplications = {};

            if (savedApplications) {

                userApplications =
                    JSON.parse(savedApplications);

            }


            const applications =
                userApplications[userEmail] || [];


            placementCount.textContent =
                applications.length
                    .toString()
                    .padStart(2, "0");


        } catch (error) {

            console.log(
                "Unable to load placement count."
            );

            placementCount.textContent = "00";

        }

    }

}