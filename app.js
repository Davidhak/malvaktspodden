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

//Gäster & avsnitt - filter
var filterTabs = document.querySelectorAll('.link-nav ul li');
var all = document.querySelectorAll('.outer-card');
var long = document.querySelectorAll('.long');
var short = document.querySelectorAll('.short');

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((tab) => {
      tab.classList.remove("active");
    })
    tab.classList.add("active");

    var tabval = tab.getAttribute("data-tabs");

    all.forEach((all) => {
      all.style.display = "none";
    })

    if (tabval == "short") {
      short.forEach((short) => {
        short.style.display = "block";
      })
    } else if (tabval == "long")  {
      long.forEach((long) => {
        long.style.display = "block";
      })
    }
  })
})

/*
loadMoreBtn.onclick = () =>{
  let cards = [...document.querySelectorAll('.work-container .row .outer-card')];
  for (var i = currentItem; i < cards.length; i++) {
    cards[i].style.display = 'block';
    currentItem += 4;
  }

  if (currentItem >= cards.length) {
    loadMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'block';
  }
}

showLessBtn.onclick = () =>{
  location.reload();
  showLessBtn.style.display = 'none';
  loadMoreBtn.style.display = 'block';
  window.location = '#guests-episodes'
  return false;
}*/

