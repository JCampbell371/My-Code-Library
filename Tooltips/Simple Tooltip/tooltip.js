$(function() {
    $(".tool-link").on("click", function () {
      $(".tool-block").removeClass("hide").addClass("show");
    });
    $(".close-btn").on("click", function () {
      $(this).parent().removeClass("show").addClass("hide");
    });
  });