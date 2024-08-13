function sendMail() {
    let params = {
        name: document.getElementById("demo-name").value,
        email: document.getElementById("demo-email").value,
        message: document.getElementById("demo-message").value,
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
}
function sendMail2() {
    let params = {
        name: document.getElementById("demo-name").value,
        email: document.getElementById("demo-email").value,
        message: document.getElementById("demo-message").value,
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
}



document.addEventListener("DOMContentLoaded", function() {
    const faqTitles = document.querySelectorAll(".faq-title");

    faqTitles.forEach(title => {
        title.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const allContents = document.querySelectorAll(".faq-content");

            // Close all open contents except the one clicked
            allContents.forEach(c => {
                if (c !== content) {
                    c.style.maxHeight = "0";
                    c.style.paddingTop = "0";
                    c.style.paddingBottom = "0";
                }
            });

            // Toggle the clicked content
            if (content.style.maxHeight && content.style.maxHeight !== "0px") {
                content.style.maxHeight = "0";
                content.style.paddingTop = "0";
                content.style.paddingBottom = "0";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.paddingTop = "10px";
                content.style.paddingBottom = "10px";
            }
        });
    });
});

