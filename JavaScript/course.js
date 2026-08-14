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
// ENROLL IN COURSE - USER SPECIFIC
// ==========================================

if (enrollBtn) {

    enrollBtn.addEventListener("click", function () {

        const selectedCourse =
            courseTitle.textContent.trim();

        if (selectedCourse === "") {

            alert("Please select a course first.");

            return;

        }


        // Get currently logged-in user

        const currentUserData =
            localStorage.getItem("currentUser");


        if (!currentUserData) {

            alert(
                "Unable to identify the logged-in student."
            );

            return;

        }


        try {

            const currentUser =
                JSON.parse(currentUserData);


            if (!currentUser.email) {

                alert(
                    "Student email not found."
                );

                return;

            }


            const userEmail =
                currentUser.email.toLowerCase();


            // Get all students' enrolled courses

            const savedCourses =
                localStorage.getItem(
                    "userEnrolledCourses"
                );


            let userEnrolledCourses = {};


            if (savedCourses) {

                userEnrolledCourses =
                    JSON.parse(savedCourses);

            }


            // Get current student's courses

            const enrolledCourses =
                userEnrolledCourses[userEmail] || [];


            // Check duplicate

            if (
                enrolledCourses.includes(
                    selectedCourse
                )
            ) {

                alert(
                    "You are already enrolled in " +
                    selectedCourse + "."
                );

                return;

            }


            // Add course for this student

            enrolledCourses.push(
                selectedCourse
            );


            userEnrolledCourses[userEmail] =
                enrolledCourses;


            // Save all students' course data

            localStorage.setItem(
                "userEnrolledCourses",
                JSON.stringify(
                    userEnrolledCourses
                )
            );


            alert(
                "You have successfully enrolled in " +
                selectedCourse + "!"
            );


        } catch (error) {

            console.log(
                "Unable to save enrolled course.",
                error
            );

            alert(
                "Something went wrong while enrolling."
            );

        }

    });

}