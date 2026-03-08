const container = document.querySelector("#courses");
const countDisplay = document.querySelector("#courseCounter");


function displayCourses(courseList) {
    container.innerHTML = "";

    courseList.forEach(course => {
        const card = document.createElement("div");
        card.textContent = `${course.subject} ${course.number}`;

        if (course.completed) {
            card.classList.add("completed");
            card.textContent = `✅${course.subject} ${course.number}`;
        }

        container.appendChild(card);
    });

    countDisplay.textContent = courseList.length;
}
