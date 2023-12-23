function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var yOffset = -50;
    var y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    var menu = document.querySelector('nav ul');
    menu.classList.remove('show');
}