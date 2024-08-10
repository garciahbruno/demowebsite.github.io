// Ensure the function is correct and prevents default form submission
function sendMail(event) {
    event.preventDefault(); // Prevents default form submission
    
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

// Attach the sendMail function to the form submission event
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", sendMail);
});
