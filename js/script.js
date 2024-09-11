// header bg reveal
const headerBg = () =>{
  const header = document.querySelector('.js-header');

  window.addEventListener('scroll',function(){
     if(this.scrollY > 0){
      header.classList.add('bg-reveal');
     }
     else{
        header.classList.remove('bg-reveal');
     }
  });

}

headerBg();

// nav
const navigation = () => {
   const navToggler = document.querySelector('.js-nav-toggler');
   const nav = document.querySelector('.js-nav');
   const navItems = document.querySelectorAll('li');

   const navToggle = () =>{
      nav.classList.toggle('open');
      navToggler.classList.toggle('active');
   }

   navToggler.addEventListener('click',navToggle);

   navItems.forEach(li => {
      li.addEventListener('click', () => {
         if(window.innerWidth <= 812){
            navToggle();
         } 
      });
      // let listItem = li.querySelector('a');
      // console.log = listItem;
   });
   // navItems.forEach(li => {
   //    li.querySelector('a').addEventListener('click', () => {
   //       if(window.innerWidth <= 812){
   //          navToggle();
   //       } 
   //    });
   //    let listItem = li.querySelector('a');
   //    console.log = listItem;
   // });
   
}
navigation();


//==================================> ANIMATION ON  SCROLL AND PRELOADER <================================
window.addEventListener('load', ()=>{
   // preloader Js
   const preloader = document.querySelector('.js-preloader');
   preloader.classList.add('fade-out');

   setTimeout(() => {
       preloader.style.display = 'none'; 
       // animate on scfroll
       AOS.init(); 
   },600);

   
   // animate on scfroll
   // AOS.init();
});   

//==================================> END <==================