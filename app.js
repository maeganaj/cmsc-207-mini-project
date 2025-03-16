let burger = document.querySelector('.burger-btn');
let close = document.querySelector('.close');
let mobileNav = document.querySelector('.mobile-nav');

burger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});

close.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});