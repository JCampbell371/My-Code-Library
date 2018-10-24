$(function() {
	bannerPos();
});

$(window).on("resize", function () { 
	bannerPos();
});

/* FUNCTION
EXAMPLE NOTE:: THE NUMBER 9 ACCOUNTS FOR BROWSER SCROLL BAR
--------------------------------------------------------------------------------------------------------------------------------------------*/

function bannerPos() {
	var siteContainSet = $(".site-container").offset();
	var bannerWidth = siteContainSet.left + 9;
	$(".right-banner").css("width", bannerWidth + "px");
	$(".left-banner").css("width", bannerWidth + "px");
  console.log(bannerWidth)
}