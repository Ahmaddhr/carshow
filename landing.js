const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let currentSlide = 0;

// Show the current slide and hide the rest
function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    if (i === currentSlide) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }
}

// Move to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide();
}

// Move to the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

// Event listeners for previous and next buttons
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Show the first slide
showSlide();

const loginbtn = document.getElementById('login-btn');
const login = document.getElementById('login');
const loginbtn2= document.getElementById('login-btn2');
const signup =document.getElementById('signup');
const signupbtn=document.getElementById('signup-btn');
const x1btn= document.getElementById('close');
const x2btn= document.getElementById('close2');

loginbtn.addEventListener('click', showlogin);
function showlogin(){
  login.style.display ='block';
  signup.style.display='none';
}
signupbtn.addEventListener('click', showsignup);
function showsignup(){
  login.style.display ='none';
  signup.style.display='block';
}
loginbtn2.addEventListener('click', showlogin);
x1btn.addEventListener('click',close1);
x2btn.addEventListener('click',close2);
function close1(){
  login.style.display ='none';
  
}
function close2(){
  signup.style.display='none';
  
}

window.addEventListener("scroll",scroll);
let header = document.querySelector('nav');
function scroll(){
header.classList.toggle("sticky",window.scrollY>0);
}
