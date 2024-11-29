document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("student-register-form");

    // ارسال فرم ثبت‌نام
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // دریافت اطلاعات از فرم
        const username = document.getElementById("new-username").value;
        const password = document.getElementById("new-password").value;

        // دریافت کاربران موجود از localStorage
        const storedUsers = JSON.parse(localStorage.getItem("students")) || [];

        // بررسی که آیا نام کاربری قبلاً ثبت‌نام شده است یا نه
        if (storedUsers.some(u => u.username === username)) {
            alert("این نام کاربری قبلاً ثبت شده است");
            return;
        }

        // ذخیره کاربر جدید در localStorage
        storedUsers.push({ username, password });
        localStorage.setItem("students", JSON.stringify(storedUsers));

        alert("ثبت نام با موفقیت انجام شد!");
        window.location.href = "index.html"; // برگشت به صفحه ورود
    });
});
