document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
        window.location.href = "index.html"; // هدایت به صفحه ورود
        return;
    }

    document.getElementById("student-name").innerText = loggedInUser.username;

    const questionForm = document.getElementById("question-form");

    questionForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const title = document.getElementById("question-title").value;
        const topic = document.getElementById("question-topic").value;
        const description = document.getElementById("question-description").value;
        const image = document.getElementById("question-image").files[0];

        const question = {
            title,
            topic,
            description,
            image: image ? URL.createObjectURL(image) : null,
            student: loggedInUser.username
        };

        const questions = JSON.parse(localStorage.getItem("questions")) || [];
        questions.push(question);
        localStorage.setItem("questions", JSON.stringify(questions));

        alert("سوال شما با موفقیت ارسال شد!");
    });
});
