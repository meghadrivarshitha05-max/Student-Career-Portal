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
// COURSES PAGE JAVASCRIPT
// ==========================================

console.log("Courses Page Loaded");


// Course Details Elements

const courseDetails =
    document.getElementById("courseDetails");

const courseTitle =
    document.getElementById("courseTitle");

const courseDescription =
    document.getElementById("courseDescription");

const courseInstructor =
    document.getElementById("courseInstructor");

const courseDuration =
    document.getElementById("courseDuration");

const enrollBtn =
    document.getElementById("enrollBtn");


// Course Information

const courses = {

    htmlCssBtn: {

        title: "HTML & CSS",

        description:
            "Learn to build beautiful responsive websites.",

        instructor:
            "Dr. Anjali Sharma",

        duration:
            "6 Weeks"

    },

    javascriptBtn: {

        title: "JavaScript",

        description:
            "Add interactivity to modern websites.",

        instructor:
            "Dr. Ramesh Kumar",

        duration:
            "8 Weeks"

    },

    pythonBtn: {

        title: "Python",

        description:
            "Programming fundamentals with Python.",

        instructor:
            "Dr. Kavitha",

        duration:
            "10 Weeks"

    },

    sqlBtn: {

        title: "SQL",

        description:
            "Master relational databases and SQL queries.",

        instructor:
            "Dr. Rajesh",

        duration:
            "5 Weeks"

    },

    gitBtn: {

        title: "Git & GitHub",

        description:
            "Version control and collaboration.",

        instructor:
            "Mr. Suresh",

        duration:
            "3 Weeks"

    },

    placementTrainingBtn: {

        title: "Placement Training",

        description:
            "Aptitude, reasoning and interview preparation.",

        instructor:
            "Placement Cell",

        duration:
            "12 Weeks"

    }

};


// ==========================================
// VIEW COURSE BUTTONS
// ==========================================

Object.keys(courses).forEach(function (buttonId) {

    const button =
        document.getElementById(buttonId);

    if (button) {

        button.addEventListener("click", function () {

            const course =
                courses[buttonId];


            courseTitle.textContent =
                course.title;


            courseDescription.textContent =
                "📖 " + course.description;


            courseInstructor.textContent =
                "👨‍🏫 Instructor: " +
                course.instructor;


            courseDuration.textContent =
                "⏳ Duration: " +
                course.duration;


            courseDetails.style.display =
                "block";


            courseDetails.scrollIntoView({
                behavior: "smooth"
            });

        });

    }

});


// ==========================================
// ENROLL IN COURSE
// ==========================================

if (enrollBtn) {

    enrollBtn.addEventListener("click", function () {

        const selectedCourse =
            courseTitle.textContent.trim();


        // ===========================
        // CHECK SELECTED COURSE
        // ===========================

        if (selectedCourse === "") {

            alert(
                "Please select a course first."
            );

            return;

        }


        // ===========================
        // GET CURRENT USER
        // ===========================

        const currentUserData =
            localStorage.getItem("currentUser");


        if (!currentUserData) {

            alert(
                "Please login again."
            );

            window.location.href =
                "login.html";

            return;

        }


        let currentUser;

        try {

            currentUser =
                JSON.parse(currentUserData);

        } catch (error) {

            alert(
                "Unable to identify the current user."
            );

            return;

        }


        if (!currentUser.email) {

            alert(
                "User email not found. Please login again."
            );

            return;

        }


        const userEmail =
            currentUser.email.toLowerCase();


        // ===========================
        // GET ALL USER COURSES
        // ===========================

        let userCourses = {};


        const savedCourses =
            localStorage.getItem(
                "userEnrolledCourses"
            );


        if (savedCourses) {

            try {

                userCourses =
                    JSON.parse(savedCourses);

            } catch (error) {

                console.log(
                    "Unable to load enrolled courses."
                );

                userCourses = {};

            }

        }


        // ===========================
        // MAKE SURE OBJECT
        // ===========================

        if (
            typeof userCourses !== "object" ||
            userCourses === null ||
            Array.isArray(userCourses)
        ) {

            userCourses = {};

        }


        // ===========================
        // CREATE USER COURSE LIST
        // ===========================

        if (!Array.isArray(userCourses[userEmail])) {

            userCourses[userEmail] = [];

        }


        // ===========================
        // CHECK DUPLICATE COURSE
        // ===========================

        if (
            userCourses[userEmail]
                .includes(selectedCourse)
        ) {

            alert(
                "You are already enrolled in " +
                selectedCourse + "."
            );

            return;

        }


        // ===========================
        // ADD COURSE
        // ===========================

        userCourses[userEmail].push(
            selectedCourse
        );


        // ===========================
        // SAVE USER COURSES
        // ===========================

        localStorage.setItem(
            "userEnrolledCourses",
            JSON.stringify(userCourses)
        );


        // ===========================
        // SUCCESS
        // ===========================

        alert(
            "You have successfully enrolled in " +
            selectedCourse + "!"
        );

    });

}