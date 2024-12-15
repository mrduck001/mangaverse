document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.getElementById("download-btn");
    const passwordInput = document.getElementById("password");
    const messageDiv = document.getElementById("download-message");

    downloadButton.addEventListener("click", () => {
        const password = passwordInput.value;
        if (password === "seenf0192") {
            // عرض صفحة التحميل
            messageDiv.style.color = "green";
            messageDiv.textContent = "Welcome, Developer!";
            setTimeout(() => {
                window.location.href = "/download-page.html"; // صفحة التحميل
            }, 2000);
        } else {
            messageDiv.style.color = "red";
            messageDiv.textContent = "Incorrect password.";
        }
    });
});

// عرض الفصل
function viewChapter(chapterNumber) {
    alert(`You are now viewing Chapter ${chapterNumber}`);
    // هنا تضيف صفحة عرض الفصل
}
