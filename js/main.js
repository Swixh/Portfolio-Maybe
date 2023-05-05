const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#mobile');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});
