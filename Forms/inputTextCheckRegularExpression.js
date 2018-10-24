/*CHECKS INPUT TEXT FIELD / ALLOWS ONLY ONE CHARACTER... CHARACTERS
MUST BE LETTERS ONLY (UPPER AND LOWER CASE)... USING REGULAR EXPRESSION

EXAMPLE NOTE: ADDED CLASS "abc-field" TO INPUT TEXT FIELD... 
THIS SET CHARACTER COUNT TO ONE :: ".slice(0, 1)" */

// Input Text Field Check using Regular Expression

$(".abc-field").on("blur focus keyup", function() {
    var val = $(this).val();
    var letters = new RegExp(/^[a-zA-Z]+$/);
    if(!letters.test(val)) {
      $(this).val("");
    } else {
      if($(this).val().length >= 1) {
        $(this).val($(this).val().slice(0, 1));
        return false;
      }
    }
  });