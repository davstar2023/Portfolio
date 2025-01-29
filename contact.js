document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Validate inputs
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.length < 5) {
            alert("Message should be at least 5 characters long.");
            return;
        }

        // If valid, submit form (simulated here)
        alert("Thank you for your message! We will get back to you soon.");
        form.reset();
    });

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});