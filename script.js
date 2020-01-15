$(document).ready(function(){

//--- Smooth Scrolling to link section ---
 var scrollLink = $('.smooth'); // css class add to link tags
 scrollLink.click(function(e){
   e.preventDefault();
   $('body,html').animate({scrollTop: $(this.hash).offset().top-75}, 1000)
  }); // end smooth scroll

// --- Window Scroll func.---
  $(window).scroll(function(){

    const nav = document.querySelector('nav');
    const img = document.querySelector('.navCara');
    const main = document.querySelector('main');
    // window scrolling place nav at top, add shadow
    if ($(window).scrollTop() >= 50) {
      nav.classList.add('fixed-top');
      $(nav).css({'box-shadow': '0px 0px 10px #999'});
    };

// --- window scrolling Add Active Nav Class ---
  var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function(){
      var sectionOffset= $(this.hash).offset().top -150;

      if(sectionOffset <= scrollbarLocation){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      };
  }); // end scrollLink func.
}); // end window (main) scroll function


});//end of JQuery doc ready

// --- Menu collapse after target selected ---
const navB = document.querySelector('#navbarSupportedContent ul');
const navDrop = document.querySelector('#navbarSupportedContent');
navB.addEventListener('click',function(){
  if(window.innerWidth < 576){
  navDrop.classList.toggle('show');
  }
});
