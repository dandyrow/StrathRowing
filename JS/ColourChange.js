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
    });
  });