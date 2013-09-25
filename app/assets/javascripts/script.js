$(function() {
  $('a#projects').on("click", function(event) {
    event.preventDefault();
    $(window).scrollTo({top: 1000, left: 0}, 800);
  });

  $('a#resume').on("click", function(event) {
    event.preventDefault();
    $(window).scrollTo({top: 4000, left: 0}, 800);
  });

  $('a#contact').on("click", function(event) {
    event.preventDefault();
    $(window).scrollTo({top: 6000, left: 0}, 800);
  });

});