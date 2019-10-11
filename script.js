$(document).ready(function(){

//--- Smooth Scrolling to link section ---
 var scrollLink = $('.smooth'); // css class add to link tags
 scrollLink.click(function(e){
   e.preventDefault();
   $('body,html').animate({scrollTop: $(this.hash).offset().top-75}, 1000)
  }); // end smooth scroll

  // var winWd = window.innerWidth;
  // console.log(winWd);

// --- Window (main) Scroll func.---
  $(window).scroll(function(){

    const nav = document.querySelector('nav');
    const img = document.querySelector('.navCara');
    const main = document.querySelector('main');
    // window scrolling place nav at top
    if ($(window).scrollTop() >= 50) {
      // img.style.display= "none";
      // $(img).fadeOut(500);
      nav.classList.add('fixed-top');
      // nav.style.display="inherit";
      $(nav).css({'box-shadow': '0px 0px 10px #555'});
    }
    else if($(window).scrollTop() <= 30){
      // img.style.display= "inherit";
      // img.style.height= "60vh";
    }

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

// --- nav float away bar ---
/*
var prevScrPos = window.pageYOffset;

window.onscroll = function(){

  var currScrPos = window.pageYOffset;

  if(prevScrPos > currScrPos || currScrPos <= 0){
    document.querySelector('#navbar').style.top = "0";
  }
  else if (window.pageYOffset < 0){
    document.querySelector('#navbar').style.top = "0";
  }
  else {
    document.querySelector('#navbar').style.top = "-100px";
  }
  prevScrPos = currScrPos;
};
 // end nav float func ---
*/
});//end of JQuery doc ready


// --- nav in viewport mode --
const team = document.querySelector('#navbarSupportedContent ul');
const navDrop = document.querySelector('#navbarSupportedContent');
team.addEventListener('click',function(){
  navDrop.classList.toggle('show');
  console.log("d", navDrop)
})
