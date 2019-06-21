/*********** Navigation ***********/
$('.burger, nav a').on('click', function(){
  $('nav').slideToggle(500);
 });
/*********** Navigation ***********/

/*********** Scroll ***********/
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
/*********** Scroll ***********/


//Slick slider 
$(document).ready(function(){
  $('.slick-slider').slick({
    speed: 300,
    slidesToShow: 1,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//Accordion
var acc = document.querySelectorAll(".accordion-1, .accordion-2, .accordion-3, .accordion-4, .accordion-5")
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Video popup
// Example with single object
$(document).ready(function() {
  $('.btn-2').magnificPopup({
    type:'iframe',
    iframe: {
      patterns: {
        youtube: {
         
          index: 'youtube.com/',
          
          
          src: 'https://www.youtube.com/embed/y3Zcj_wvJy8'
          
        }
      }
    }
    
    
  });
  });
  
  
  

//Burger Animation

