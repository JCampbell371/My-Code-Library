// Accordion

if ($('.accordion').length > 0) {
    $('.wrapper').on('click', '.accordion > li > a', function (e) {
      if ($(this).hasClass('external')) {
        return;
      }
      else {
        e.preventDefault();
      }
      $(this).next().slideToggle('fast');
      $(this).toggleClass('collapse');
    });
  }