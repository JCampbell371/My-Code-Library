$(document).ready(function() {
    var $els = $('p[class^=alternatingView]');
    var i = 0;
    var len = $els.length;
    $els.slice(1).hide();
    setInterval(function() {
      $els.eq(i).fadeOut(function() {
        i = (i + 1) % len
        $els.eq(i).fadeIn();
      })
    }, 2000)
  });