$(function() {
    $("input[value='101']").on("change", function (e) {
              e.preventDefault();
        if($(this).is(':checked')) {
          $(this).parent().addClass("checked");
          $("input[value='102']").prop("checked", false);
          $("input[value='102']").parent().removeClass("checked");
        } else {
          $(this).parent().removeClass("checked");
        }
          });
          $("input[value='102']").on("change", function (e) {
              e.preventDefault();
        if($(this).is(':checked')) {
          $(this).parent().addClass("checked");
          $("input[value='101']").prop("checked", false);
          $("input[value='101']").parent().removeClass("checked");
        } else {
          $(this).parent().removeClass("checked");
        }
    });
  });