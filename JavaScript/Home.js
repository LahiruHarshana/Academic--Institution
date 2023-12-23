function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var yOffset = -50;  as
    var y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    var menu = document.querySelector('nav ul');
    menu.classList.remove('show');
}

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});