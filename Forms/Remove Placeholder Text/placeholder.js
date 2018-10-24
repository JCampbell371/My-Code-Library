/* USE CASE: IE9 AND BELOW
---------------------------------------------------------------------*/
$(function() {
    $("input.enter-your-email").focus(function () {
      $(this).attr("placeholder", "");
    }).blur(function () {
      $(this).attr("placeholder", "Enter your email");
    });
  });
  