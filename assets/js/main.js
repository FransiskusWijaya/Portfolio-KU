let nemuIcon = document.querySelector('#menu-Icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}