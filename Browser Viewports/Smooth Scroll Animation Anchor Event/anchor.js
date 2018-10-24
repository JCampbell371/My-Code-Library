$(function() {
    $("a[href*=#]:not([href=#])").click(function(event) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        event.preventDefault();
        smoothScroll(this);
      }
    })
  });
  
  /* SMOOTH SCROLL VIA IN-PAGE ANCHOR LINK
    ------------------------------------------------*/
  function smoothScroll(element) {
    if (location.pathname.replace(/^\//, '') == element.pathname.replace(/^\//, '') && location.hostname == element.hostname) {
      var target = $(element.hash);
      target = target.length ? target : $('[name=' + element.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  }