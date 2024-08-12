// Initialize reCAPTCHA
grecaptcha.ready(function() {
    // Optionally, you can execute reCAPTCHA here if needed
    // grecaptcha.execute();
});

// Function for the first email template
function sendMail() {
    grecaptcha.execute().then(function(token) {
        let params = {
            name: document.getElementById("demo-name").value,
            email: document.getElementById("demo-email").value,
            message: document.getElementById("demo-message").value,
            'g-recaptcha-response': token // Include the reCAPTCHA token
        };

        emailjs.send("service_0f734hc", "template_fzlymrv", params)
            .then(function(response) {
                document.getElementById('notification').innerHTML = '<p>Form Submitted</p>';
                document.getElementById('notification').style.display = 'block';
                document.getElementById('notification').style.color = 'green';
            })
            .catch(function(error) {
                document.getElementById('notification').innerHTML = '<p>Failed to send email. Please try again.</p>';
                document.getElementById('notification').style.display = 'block';
                document.getElementById('notification').style.color = 'red';
            });
    }).catch(function(error) {
        console.error('Error executing reCAPTCHA:', error);
    });
}

// Function for the second email template
function sendMail2() {
    grecaptcha.execute().then(function(token) {
        let params = {
            name: document.getElementById("demo-name").value,
            email: document.getElementById("demo-email").value,
            message: document.getElementById("demo-message").value,
            'g-recaptcha-response': token // Include the reCAPTCHA token
        };

        emailjs.send("service_0f734hc", "template_3h1i278", params)
            .then(function(response) {
                document.getElementById('notification').innerHTML = '<p>Form Submitted</p>';
                document.getElementById('notification').style.display = 'block';
                document.getElementById('notification').style.color = 'green';
            })
            .catch(function(error) {
                document.getElementById('notification').innerHTML = '<p>Failed to send email. Please try again.</p>';
                document.getElementById('notification').style.display = 'block';
                document.getElementById('notification').style.color = 'red';
            });
    }).catch(function(error) {
        console.error('Error executing reCAPTCHA:', error);
    });
}
