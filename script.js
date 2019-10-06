$(document).ready(function(){



//Smooth Scrolling to link section
 var scrollLink = $('.smooth'); // css class add to link tags
 scrollLink.click(function(e){
   e.preventDefault();
   $('body,html').animate({scrollTop: $(this.hash).offset().top-60}, 1000)
  }); // end smooth scroll

  // var winWd = window.innerWidth;
  // console.log(winWd);


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
  var div = document.createElement('div');
  var myContent = document.querySelector('.myContent');
   // divImg.src = event.target.getAttribute('src');
   div = event.target;
  myContent.appendChild(div);

  modalStart(mymodal);
});

});//end of doc ready

// Gallery Images -54

const imageArray = [{pic:"img/IMG_0148.jpeg", name:"Picture 1"},
                    {pic:"img/IMG_0175.jpeg", name:"Picture 2"},
                    {pic:"img/IMG_0176.jpeg", name:"Picture 3"},
                    {pic:"img/IMG_0224.jpeg", name:"Picture 4"},
                    {pic:"img/IMG_1351.jpeg", name:"Picture 5"},
                    {pic:"img/IMG_1402.jpeg", name:"Picture 6"},
                    {pic:"img/IMG_1642.jpeg", name:"Picture 7"},
                    {pic:"img/IMG_1891.jpeg", name:"Picture 8"},
                    {pic:"img/IMG_1893.jpeg", name:"Picture 9"},
                    {pic:"img/IMG_1897.jpeg", name:"Picture 10"},
                    {pic:"img/IMG_1925.jpeg", name:"Picture 11"},
                    {pic:"img/IMG_1930.jpeg", name:"Picture 12"},
                    {pic:"img/IMG_1937.jpeg", name:"Picture 13"},
                    {pic:"img/IMG_2126.jpeg", name:"Picture 14"},
                    {pic:"img/IMG_2162.jpeg", name:"Picture 15"},
                    {pic:"img/IMG_2289.jpeg", name:"Picture 16"},
                    {pic:"img/IMG_2290.jpeg", name:"Picture 17"},
                    {pic:"img/IMG_2425.jpeg", name:"Picture 18"},
                    {pic:"img/IMG_2492.jpeg", name:"Picture 19"},
                    {pic:"img/IMG_2540.jpeg", name:"Picture 20"},
                    {pic:"img/IMG_2547.jpeg", name:"Picture 21"},
                    {pic:"img/IMG_2557.jpeg", name:"Picture 22"},
                    {pic:"img/IMG_2660.jpeg", name:"Picture 23"},
                    {pic:"img/IMG_2739.jpeg", name:"Picture 24"},
                    {pic:"img/IMG_2781.jpeg", name:"Picture 25"},
                    {pic:"img/IMG_2868.jpeg", name:"Picture 26"},
                    {pic:"img/IMG_2881.jpeg", name:"Picture 27"},
                    {pic:"img/IMG_2885.jpeg", name:"Picture 28"},
                    {pic:"img/IMG_2919.jpeg", name:"Picture 29"},
                    {pic:"img/IMG_2933.jpeg", name:"Picture 30"},
                    {pic:"img/IMG_3108.jpeg", name:"Picture 31"},
                    {pic:"img/IMG_3539.jpeg", name:"Picture 32"},
                    {pic:"img/IMG_3553.jpeg", name:"Picture 33"},
                    {pic:"img/IMG_3554.jpeg", name:"Picture 34"},
                    {pic:"img/IMG_3717.jpeg", name:"Picture 35"},

                    {pic:"img/IMG_3988.jpeg", name:"Picture 36"},
                    {pic:"img/IMG_4079.jpeg", name:"Picture 37"},
                    {pic:"img/IMG_4118.jpeg", name:"Picture 38"},
                    {pic:"img/IMG_4174.jpeg", name:"Picture 39"},
                    {pic:"img/IMG_4194.jpeg", name:"Picture 40"},

                    {pic:"img/IMG_4216.jpeg", name:"Picture 41"},
                    {pic:"img/IMG_4302.jpeg", name:"Picture 42"},
                    {pic:"img/IMG_4316.jpeg", name:"Picture 43"},
                    {pic:"img/IMG_4363.jpeg", name:"Picture 44"},
                    {pic:"img/IMG_7713.jpeg", name:"Picture 45"},

                    {pic:"img/IMG_7832.jpeg", name:"Picture 46"},
                    {pic:"img/IMG_7918.jpeg", name:"Picture 47"},
                    {pic:"img/IMG_8108.jpeg", name:"Picture 48"},
                    {pic:"img/pic24.jpg", name:"Picture 49"},
                    {pic:"img/pic32.jpg", name:"Picture 50"},

                    {pic:"img/pic43.jpg", name:"Picture 51"},
                    {pic:"img/unnamed-2.jpg", name:"Picture 52"},
                    {pic:"img/unnamed-3.jpg", name:"Picture 53"},
                    {pic:"img/unnamed.jpg", name:"Picture 54"},

                  ] // end photos

const imageLocation = document.querySelector('#imageLocation');
console.log(imageLocation)
console.log(imageArray[2].pic)
imageArray.forEach(function(i,x){
  let img = document.createElement('img');
  let div = document.createElement('div');
  let p = document.createElement('p');
  div.classList.add('col-4');
  div.style.height = "300px";
  // div.style.backgroundImage = "url("+imageArray[x].pic+")";
  // div.style.backgroundSize = "cover";
  // div.style.backgroundPosition = "center";
  // div.style.border = "4px solid #fff";
  p.style.color = "#fff";
  p.style.backgroundColor = "#000";

  img.setAttribute("src", imageArray[x].pic);
  p.textContent = imageArray[x].name;
  div.appendChild(img);
  div.appendChild(p);
  imageLocation.appendChild(div);


})
