
// Toggle class Active
const navbarNav = document.querySelector('.navbar-nav');


// ketika hamburger menu di Klik

document.querySelector('#hamburger').onclick = () => navbarNav.classList.toggle('active');


// klik diluar side bar untuk menghilangkann nav
const hamburger = document.querySelector('#hamburger');
document.addEventListener('click', e => {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
}) 