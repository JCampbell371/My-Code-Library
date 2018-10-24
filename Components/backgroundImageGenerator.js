/*EXAMPLE NOTE: SET CLASS "image-block" to DIV CONTAINER*/
// Random CSS Background Image Generator Using an Array

$(function() {
    var imgGen = ["test-01.jpg", "test-02.jpg", "test-03.jpg", "test-04.jpg", "test-05.jpg"];
    $(".image-block").css({ "background-image": "url(../images/" + imgGen[Math.floor(Math.random() * imgGen.length)] + ")" });
  });