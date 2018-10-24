$("#form").on("submit", function () {
    if ($(this).valid()) {
      $.magnificPopup.open({
        items: {
          src: '#Loader',
          type: 'inline'
        }
      });
    }
  });