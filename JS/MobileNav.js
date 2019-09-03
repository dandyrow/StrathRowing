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