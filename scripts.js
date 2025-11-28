
console.log("JavaScript file loaded!");

window.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function(event) {
        //ent.preventDefault();
        console.log("FORM SUBMITTED!")
        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red";
            return;
        }

        messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        messageDiv.style.color = "white !important";
        emailInput.value = "";
    });
});