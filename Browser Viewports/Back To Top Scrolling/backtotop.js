$(window).scroll(function() {
    if ($(this).scrollTop() > 100)
      $(".back-to-top").fadeIn(500);
    else
      $(".back-to-top").fadeOut(500);
  });
  
  $('.back-to-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });