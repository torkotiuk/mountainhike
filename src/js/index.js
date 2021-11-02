import '../sass/main.scss';
// hamburger --- means button
// menu -------- means list
const unToggle = e => {
  if (!String(e.target.className).includes('hamburger')) {
    console.log('if');
    menu.classList.remove('showMenu');
    hamburger.classList.remove('showMenu');
  }
};

const toggle = e => {
  menu.classList.toggle('showMenu');
  hamburger.classList.toggle('showMenu');
};

// list
const menu = document.querySelector('.menu');
menu.addEventListener('click', toggle);

// button
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggle);

const header = document.querySelector('.header');
const main = document.querySelector('.main');
header.addEventListener('click', unToggle);
main.addEventListener('click', unToggle);
