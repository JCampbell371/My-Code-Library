$(function() {
    var ratingsValue = $("ratingsValue");
    var stars = $(".stars a")
    function UpdateStars() {
      console.log("updating stars...");
      var starValue = $(this).text();
      ratingsValue.val(starValue);
      $(this).addClass("active");
      if($(this).hasClass("active")) {
         $(this).prevUntil().addClass("active");
         $(this).nexUntil().removeClass("active");
      }
    }
    $(stars).each(function() {
      $(this).on("click", UpdateStars);
      $(this).click();
    });
  });