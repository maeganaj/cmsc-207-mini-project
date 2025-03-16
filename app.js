let burger = document.querySelector('.burger-btn');
let close = document.querySelector('.close');
let mobileNav = document.querySelector('.mobile-nav');

burger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});

close.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

let click1 = document.querySelector('.click1');
let click2 = document.querySelector('.click2');
let click3 = document.querySelector('.click3');

click1.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

click2.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

click3.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});