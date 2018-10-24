// Loading Preload Container after form is valid

$("#viewContent form").on("submit", function () {
    if($(this).valid()) {
      $("#loader").fadeIn("fast");
    }
  });