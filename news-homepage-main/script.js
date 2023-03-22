const iconClose = document.querySelector('.icon-close'); 
const menuIcon = document.querySelector('.paige-menu');
const navInfo = document.querySelector('.nav-info'); 
const menuContainer = document.querySelector('.logo-menu'); 
const body = document.querySelector('body'); 

function toogleMenu(){
    if (menuIcon){
        menuContainer.classList.toggle("menu-toggle");
        navInfo.classList.toggle('nav-info-toggle');
        iconClose.classList.toggle('toggle-close-icon');
       body.classList.toggle('background');
    }
}

document.addEventListener('click', toogleMenu);