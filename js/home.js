let menu=  document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll =() => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
}

const typed = new Typed('.text', {
    strings: ['physical Fitness','Weight Gain','Fatlose'],
    typeSpeed: 50,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });
