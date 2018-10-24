/*SETS CTA BUTTON TO ACTIVE IF FORM IS VALID AND UPLOAD INPUT FIELD IS VALID

EXAMPLE NOTE: UPLOAD BUTTON ID "userImageInput" ON CHANGE
FORM CLASS "editor-step form" / INPUT BUTTON CLASS "btn-next"*/

$(function() {
    $(".btn-next").prop("disabled", true);
    $("#userImageInput").on("change", function() {
      if(!$(".editor-step form").valid()) {
        $(".btn-next").prop("disabled", true);
      } else {
        if($(this).val().length > 0) {
          //UPLOAD TEXT FIELD IS VALID
        }
        $(".btn-next").prop("disabled", false);
      }
    });
  });