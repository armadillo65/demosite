$(document).ready(function(){



//Smooth Scrolling to link section
 var scrollLink = $('.smooth'); // css class add to link tags
 scrollLink.click(function(e){
   e.preventDefault();
   $('body,html').animate({scrollTop: $(this.hash).offset().top-60}, 1000)
  }); // end smooth scroll

// Window (main) Scroll func.
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

// window scrolling Add Active Nav Class

  var scrollbarLocation = $(this).scrollTop();

  //try to remove active class above services
  var services = $('#services').offset().top;
  // console.log("bar", scrollbarLocation);
  // console.log("loc", services);
  if(scrollbarLocation<services){
    $(services).removeClass('active');
  }; // end of remove

  scrollLink.each(function(){
      var sectionOffset= $(this.hash).offset().top-150;

      if(sectionOffset <= scrollbarLocation){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      };
  }); // end scrollLink func.


}); // end window scroll function


function go(){
  const nav = document.querySelector('nav');
  const img = document.querySelector('.navCara');
  img.style.height= "30vh";

  nav.classList.add('fixed-top');
};

function modalStart(x){
  $(x).addClass('myOverlay');
  $('.myContent').css('display','block');
 };

function modEnd(){
  $('.myModal').removeClass('myOverlay');
  $('.myModal img').remove();
  $('.myContent').css('display','none');
 };

const gal = $('#galleryPics');
const mymodal = document.querySelector('.myModal');

// --close modal--
$('#done').click(function(){
  modEnd();
});

gal.click(function(e){
  const divImg = document.createElement('img');
  const myContent = document.querySelector('.myContent');
  divImg.src = event.target.getAttribute('src');
  myContent.appendChild(divImg);

  modalStart(mymodal);
});


});//end of doc ready
