const hamburger = document.getElementById('hamburger');
const navigation = document.querySelector('.header__nav');
const hamburgerImage = document.getElementById('hamburger-image');
let icon = 'hamburger';

hamburger.addEventListener('click', displayNavigation);

function displayNavigation() {
  navigation.classList.toggle('header__nav--shown');
  icon = (icon === 'hamburger') ? 'close' : 'hamburger';
  hamburgerImage.src = `assets/images/icon-${icon}.svg`;
}