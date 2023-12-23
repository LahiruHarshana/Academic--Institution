document.getElementById('inquiryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    alert('Inquiry submitted successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
    this.reset();
});