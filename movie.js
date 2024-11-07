//js power

// Indicator (for nav links highlighting)
const marker = document.querySelector('.marker');
const items = document.querySelectorAll('nav ul li');

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

items.forEach(link => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});

// For menu scroll
const nav = document.querySelector('nav');

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 20) {
    nav.classList.add('nav');
  } else {
    nav.classList.remove('nav');
  }
  
  if (window.pageYOffset >= 700) {
    nav.classList.add('navBlack');
  } else {
    nav.classList.remove('navBlack');
  }
});

// Menu toggle
const menu = document.querySelector('#menu');
const menuBox = document.querySelector('#menu-box');
let isMenuOpen = false;

menu.addEventListener("click", () => {
  if (!isMenuOpen) {
    menuBox.style.display = "block";
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-remove");
    isMenuOpen = true;
  } else {
    menuBox.style.display = "none";
    menu.classList.remove("fa-remove");
    menu.classList.add("fa-bars");
    isMenuOpen = false;
  }
});

// OwlCarousel-like carousel using vanilla JS (if jQuery isn't needed)
const carousel = document.querySelector(".carousel");
let currentSlide = 0;
let slides = carousel.children;
const totalSlides = slides.length;

function showSlide(index) {
  // Hide all slides
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }
  // Show the current slide
  slides[index].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Auto-play the carousel (every 5 seconds)
setInterval(nextSlide, 5000);

// Initially show the first slide
showSlide(currentSlide);

