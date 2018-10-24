// Check Input Text Field and Next CTA Button
// Enabled - Disabled States

$(function() {
    $(".btn-next").prop("disabled", true);
    $('input[type="text"]').on("blur focus keyup", function () {
      var isvalid;
      $('input[type="text"]').each(function() {
        if($(this).val().length == 0) {
          isvalid = false;
          return false;
        } else {
          isvalid = true;
        }
      });
      if(isvalid) {
        $(".btn-next").prop("disabled", false);
      } else {
        $(".btn-next").prop("disabled", true);
      }
    });
  })