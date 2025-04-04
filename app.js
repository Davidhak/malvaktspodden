const burgerMenu = document.querySelector('.hamburger-nav');
let loadMoreBtn = document.querySelector('.load-more');
let currentItem = 3;

function showBurgerMenu() {
  burgerMenu.style.display = 'flex';
}

function closeBurgerMenu() {
  burgerMenu.style.display = 'none';
}

function openPage() {
  window.location = 'index.html';
}

loadMoreBtn.onclick = () =>{
  let cards = [...document.querySelectorAll('.work-container .row .outer-card')];
  for (var i = currentItem; i < currentItem + 3; i++) {
    cards[i].style.display = 'inline-block';
  }
  currentItem += 3;

  if (currentItem >= cards.length) {
    loadMoreBtn.style.display = 'none';
  }
}
