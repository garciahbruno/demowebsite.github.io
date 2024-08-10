// Initialize EmailJS with your user ID
(function() {
    emailjs.init("YOUR_USER_ID");  // Replace YOUR_USER_ID with your actual User ID
})();

// Function to send email
function sendMail(event) {
    event.preventDefault(); // Prevent default form submission
    
    let params = {
        name: document.getElementById("demo-name").value,
        email: document.getElementById("demo-email").value,
        message: document.getElementById("demo-message").value,
    };

    emailjs.send("service_0f734hc", "template_fzlymrv", params)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email Sent!!");
        }, function(error) {
            console.log("FAILED...", error);
            alert("Failed to send email. Please try again.");
        });
}

// Attach sendMail function to form submission
document.getElementById("interest-form").addEventListener("submit", sendMail);
