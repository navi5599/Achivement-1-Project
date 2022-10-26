//Modals logic

let btn = document.querySelector('.btn_1');
let btn2 = document.querySelector('.btn_2');
let btn3 = document.querySelector('.btn_3');
let btn4 = document.querySelector('.btn_4');
let btn5 = document.querySelector('.btn_5');
let btn6 = document.querySelector('.btn_6');

let modal_container = document.querySelector('.modal_container_1');
let modal_container2 = document.querySelector('.modal_container_2');
let modal_container3 = document.querySelector('.modal_container_3');
let modal_container4 = document.querySelector('.modal_container_4');
let modal_container5 = document.querySelector('.modal_container_5');
let modal_container6 = document.querySelector('.modal_container_6');

let close_btn = document.querySelector('.close');
let close_btn2 = document.querySelector('.close2');
let close_btn3 = document.querySelector('.close3');
let close_btn4 = document.querySelector('.close4');
let close_btn5 = document.querySelector('.close5');
let close_btn6 = document.querySelector('.close6');

let close_icon = document.querySelector('.x_modal');
let close_icon2 = document.querySelector('.x_modal2');
let close_icon3 = document.querySelector('.x_modal3');
let close_icon4 = document.querySelector('.x_modal4');
let close_icon5 = document.querySelector('.x_modal5');
let close_icon6 = document.querySelector('.x_modal6');

btn.addEventListener('click', () => {
  modal_container.classList.add('modal_active');
  slideIndex = 1;
  showSlides(slideIndex);
});

btn2.addEventListener('click', () => {
  modal_container2.classList.add('modal_active');
  slideIndex = 4;
  showSlides(slideIndex);
});

btn3.addEventListener('click', () => {
  modal_container3.classList.add('modal_active');
  slideIndex = 7;
  showSlides(slideIndex);
});

btn4.addEventListener('click', () => {
  modal_container4.classList.add('modal_active');
  slideIndex = 7;
  showSlides(slideIndex);
});

btn5.addEventListener('click', () => {
  modal_container5.classList.add('modal_active');
  slideIndex = 7;
  showSlides(slideIndex);
});
btn6.addEventListener('click', () => {
  modal_container6.classList.add('modal_active');
  slideIndex = 7;
  showSlides(slideIndex);
});

close_btn.addEventListener('click', () => {
  modal_container.classList.remove('modal_active');
});
close_btn2.addEventListener('click', () => {
  modal_container2.classList.remove('modal_active');
});
close_btn3.addEventListener('click', () => {
  modal_container3.classList.remove('modal_active');
});
close_btn4.addEventListener('click', () => {
  modal_container4.classList.remove('modal_active');
});
close_btn5.addEventListener('click', () => {
  modal_container5.classList.remove('modal_active');
});
close_btn6.addEventListener('click', () => {
  modal_container6.classList.remove('modal_active');
});

close_icon.addEventListener('click', () => {
  modal_container.classList.remove('modal_active');
});
close_icon2.addEventListener('click', () => {
  modal_container2.classList.remove('modal_active');
});
close_icon3.addEventListener('click', () => {
  modal_container3.classList.remove('modal_active');
});
close_icon4.addEventListener('click', () => {
  modal_container4.classList.remove('modal_active');
});
close_icon5.addEventListener('click', () => {
  modal_container5.classList.remove('modal_active');
});
close_icon6.addEventListener('click', () => {
  modal_container6.classList.remove('modal_active');
});

// MODAL SLIDER

let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let modal_active = document.getElementsByClassName('modal_active');
  let slides = modal_active[0].getElementsByClassName('mySlides');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
