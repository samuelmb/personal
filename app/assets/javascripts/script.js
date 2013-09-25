$(function() {
  $('a#projects').on("click", function(event) {
    event.preventDefault();
    $(window).scrollTo({top: 1000, left: 0}, 600);
  });

  $('a#resume').on("click", function(event) {
    event.preventDefault();
    $(window).scrollTo({top: 3000, left: 0}, 600);
  });

  $('a#contact').on("click", function(event) {
    event.preventDefault();
    $(window).scrollTo({top: 5000, left: 0}, 600);
  });

});