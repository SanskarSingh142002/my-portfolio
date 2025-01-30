// Toggle Menu for Mobile View
const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/// Initialize EmailJS
(function() {
    emailjs.init("pKqtKMn7wRxjSrk3e");  
})();

// Form Validation and Email Sending
function validateForm(event) {
    event.preventDefault();  

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    // Send email using EmailJS
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send("service_tvhn3ae", "template_zncmnil", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Message sent successfully!");
            document.getElementById('contact-form').reset(); 
        }, function(error) {
            console.error("Error sending email:", error);
            alert("Oops! Something went wrong. Please try again later.");
        });
}
