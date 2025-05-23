let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Certifique-se que o HTML tem essa classe
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            console.log(id)
            console.log(document.querySelector('header nav a[href*=' + id + ']'))
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
