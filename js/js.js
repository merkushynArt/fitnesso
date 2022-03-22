let btn = document.querySelector('.burger__btn');
let mobMenu = document.querySelector('.mobile-menu')
btn.onclick = function() {
   btn.classList.toggle('active');
   mobMenu.classList.toggle('active');
} 