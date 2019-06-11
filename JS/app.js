//Hamburger menu for mobile nev
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const header = document.querySelector("header")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

var timer;
$(window).bind('resize', function() {
clearTimeout(timer);
timer = setTimeout(function(){ $(window).resize(); }, 250);
});


//Change nav color on scroll
$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 80) {
        $("nav").css("background" , "var(--accent-color)");
      }

      else{
          $("nav").css("background" , "rgba(0, 0, 0, 0)"); 
      }
  })
})