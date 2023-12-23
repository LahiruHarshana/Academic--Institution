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

    // You can add additional logic here, such as sending the form data to a server

    alert('Inquiry submitted successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

    // Reset the form
    this.reset();
});