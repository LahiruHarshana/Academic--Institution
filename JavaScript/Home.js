function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var yOffset = -50; // Adjust as needed
    var y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    // Close the menu on small screens after clicking a link
    var menu = document.querySelector('nav ul');
    menu.classList.remove('show');
}

// JavaScript for changing header background on scroll
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});