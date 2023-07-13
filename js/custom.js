(function ($) {
  "use strict";

  $(document).ready(function() {
    $('select').niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

$(document).ready(function() {
  $('select').niceSelect();
});

}(jQuery));

window.addEventListener("load", function() {
  // Set a timeout for the loader
  setTimeout(function() {
    // Hide the loader
    document.getElementById("loader").style.display = "none";
    // Show the page content
    document.getElementById("content").style.display = "block";
  }, 6700); // Adjust the duration (in milliseconds) as needed
});