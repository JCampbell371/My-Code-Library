//EXAMPLE NOTES: Input Text "#setTitle" DISPLAYS CONTENT INTO "span.textFill" AFTER 55 CHARACTERS AND ECLIPSE (...) WILL APPEAR

$(function() {
    var characters = 55;
    $("#setTitle").keyup(function () {
      $("span.eclipse").css("display", "none");
      $("span.textFill").text($(this).val());
      if(!$(this).val()) {
        $("span.eclipse").css("display","inline-block");
      }
      if($(this).val().length > characters) {
        $(this).val($(this).val().substr(0, characters));
      }
    });
  });