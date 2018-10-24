/*UPDATE IFRAME HEIGHT BASED ON OUTER PARENT SITE CONTAINER HEIGHT INSIDE THE IFRAME ON PAGE LOAD
EXAMPLE NOTE: LOOKS FOR "siteContainer" ID HEIGHT / RESETS IFRAME HEIGHT WITH ID OF "promoIframe"*/

$(function() {
    var siteHeight = $("#siteContainer").height();
    var setIframe = $("#promoIframe", parent.document);
    setIframe.css("height", siteHeight);
});