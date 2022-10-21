const navSlider = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navigation-list');
  const navLinks = document.querySelectorAll('.navigation-list li');

  // toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};

navSlider();
