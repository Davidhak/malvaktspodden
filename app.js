const burgerMenu = document.querySelector('.hamburger-nav');
let loadMoreBtn = document.querySelector('.load-more');
let showLessBtn = document.querySelector('.show-less');

let currentItem = 4;

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
  for (var i = currentItem; i < cards.length; i++) {
    cards[i].style.display = 'inline-block';
    currentItem += 4;
  }

  if (currentItem >= cards.length) {
    loadMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'inline-block';
  }
}

showLessBtn.onclick = () =>{
  location.reload();
  showLessBtn.style.display = 'none';
  loadMoreBtn.style.display = 'inline-block';
  window.location = 'https://malvaktspodden.se/#guests-episodes'
  return false;
}
