const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const shopping = document.querySelector('.navbar__shop');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
