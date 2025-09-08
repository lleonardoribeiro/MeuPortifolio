const mobileMenu = document.querySelector('.mobile-menu i');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
});
