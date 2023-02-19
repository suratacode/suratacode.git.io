// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger-menu di klik

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// KLik diluar sidebar untuk menghilangkan nav
const hamberger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
