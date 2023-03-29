// backdrop class adder
 const hamburger = document.querySelector('#hiddencheckbox');
 const navbar = document.querySelector('.navbar');
 const backdrop = document.querySelector('.backdrop')
 const collapse = document.querySelector('.collapse')
 const Body = document.getElementsByTagName('body')[0];

 hamburger.addEventListener('click',(e)=>{
    navbar.style.zIndex = navbar.style.zIndex === 'unset' ? '9999' : 'unset';
    backdrop.style.display = backdrop.style.display === 'none' ? 'block' : 'none';
    Body.classList.toggle('fixed')
 })



 
