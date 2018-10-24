$(".series-cta-btn").on("click", function () {
    $.magnificPopup.open({
      items: {
        src: '#seriesContainer',
        type: 'inline'
      },
      closeOnContentClick: false,
      closeOnBgClick: true,
      showCloseBtn: false,
      enableEscapeKey: true,
      callbacks: {
        open: function () {
          $("html").css ({ "margin-right": 0, "overflow": "auto" });
          $("#seriesContainer").fadeIn(250);
        }
      }
    });
  });

  /* MAGNIFIC POPUP EXAMPLE / CUSTOM CLOSE BUTTON
  ---------------------------------------------------------------------*/
  $(".custom-close").click(function (event) {
    event.preventDefault();
    $.magnificPopup.close();
  });