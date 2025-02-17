const burgerMenu = document.querySelector('.hamburger-nav');

function showBurgerMenu() {
  burgerMenu.style.display = 'flex';
}

function closeBurgerMenu() {
  burgerMenu.style.display = 'none';
}

function openPage() {
  window.location = 'index.html';
}
