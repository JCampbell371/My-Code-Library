var index = 0;
  var blocks = $(".blocks");
  $(blocks).on("click", function() {
    index++;
    $(blocks).css("top", "-=250");
    if(index == 3) {
      index = 0;
      $(".one").css("top", "50px");
      $(".two").css("top", "300px");
      $(".three").css("top", "550px");
    }
  });