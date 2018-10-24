/*URL CHECK: IF URL HAS A SPECIFIC "NAME", THEN PAGE SCROLL TO SPECIFIC POINT ON THE PAGE VIA A SET TIMEOUT
EXAMPLE NOTE: LOOK FOR "DETAIL" IN URL AND THEN THE PAGE WILL SCROLL TO DIV CONTAINER WITH THE ID OF "ROSTER"*/

if(window.location.href.indexOf("Detail") > -1) {
    setTimeout(function(){
      var target = $("#roster").offset();
      $("html, body").scrollTop(target.top);
    }, 2500);
  }