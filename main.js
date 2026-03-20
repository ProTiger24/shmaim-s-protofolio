// Navbar background change on scroll
window.onscroll = function() {
    let nav = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-primary', 'shadow');
        nav.classList.remove('bg-dark');
    } else {
        nav.classList.add('bg-dark');
        nav.classList.remove('bg-primary', 'shadow');
    }
};