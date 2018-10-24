$(function() {
    var flyingObject = $("#flyingOjbect");
    var dropZone = $("#dropZone");
    var hitZone = false;
    var hitValue;
    console.log(hitZone);
    console.log(hitValue);
    $(flyingObject).animate({
      top: "+=700px"
    }, 2000, "linear", function() {
      hitZone = "true";
      console.log("hit drop zone");
      console.log(hitZone);
      hitValue = jquery.data(flyingObject, "blah", "hello");
      console.log(hitValue);
    });
  });