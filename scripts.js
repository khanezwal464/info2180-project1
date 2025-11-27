/* Add your JavaScript to this file */

/*
window.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();   // prevent page reload

        const email = emailInput.value.trim(); // FIXED

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            return;
        }

        // Success message (FIXED with backticks)
        messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;

        emailInput.value = ""; // clear field
    });
});
*/


/* Add your JavaScript to this file */
/*

window.addEventListener("DOMContentLoaded", function() {
    // Select the form element inside the .newsletter section
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".newsletter .message");

    // Add an event listener for the form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const email = emailInput.value.trim(); 

        // 1. Check if the email field is empty 
        if (email === "") {
            // Error: Display the error message
            messageDiv.textContent = "Please enter a valid email address.";
            // Set error color (e.g., Red)
            messageDiv.style.color = 'red'; 
            return; 
        }

        // 2. Success: Display the confirmation message 
        messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`; 
        
        // Set success color (e.g., White, as the background is green #48BB78)
        messageDiv.style.color = 'white'; 

        // Clear the input field after successful submission
        emailInput.value = ""; 
    });
});

*/
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