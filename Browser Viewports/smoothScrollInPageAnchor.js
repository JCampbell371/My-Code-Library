/*HTML NOTE: ADD ".sTarget" TO ANCHOR TAG*/
$(".sTarget").on("click", function(event) {
    event.preventDefault();
    smoothScroll(this);
  });
  
  /* FUNCTION :: SMOOTH SCROLL TO IN PAGE ANCHORS*/
  function smoothScroll(element) {
      var target = $(element.hash);
      target = target.length ? target : $('[name=' + element.hash.slice(1) + ']');
      if (target.length) {
          $('html,body').animate({
              scrollTop: target.offset().top
          }, 1000);
          return false;
      }
  }