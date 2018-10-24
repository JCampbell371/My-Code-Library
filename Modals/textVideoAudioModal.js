// Checks to make sure magnificPopup plugin is active on page
if ($.fn.magnificPopup) {
    // Lightbox Images
    $('.xxxxx-images').magnificPopup({
      delegate: 'a',
      type: 'image'
    });
  
    // Lightbox Videos
    $('.Video-link').not('.videos .Video-link').each(function () {
      $(this).magnificPopup({
        items: {
          src: $(this).next('.Video-block'),
          type: 'inline'
        }
      });
    });
  
    // Lightbox Audio
    $('.Audio-link').each(function () {
      $(this).magnificPopup({
        items: {
          src: $(this).next('.Audio-block'),
          type: 'inline'
        }
      });
    });
  
    // Lightbox Text and Images
    $('.Detail-link').each(function () {
      $(this).magnificPopup({
        items: {
          src: $(this).next('.Detail-block'),
          type: 'inline'
        },
        callbacks: {
          open: function () {
            var mfpwidth = $(document).width();
            var mfpheight = $(document).height();
            $('.mfp-bg').css({ "width": mfpwidth, "height": mfpheight });
          },
          close: function () { }
        }
      });
    });
  }