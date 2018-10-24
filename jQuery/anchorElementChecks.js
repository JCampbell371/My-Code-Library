  
  //Anchor Element checks using jQuery

  /* ANCHOR TAG - MAILTO / ^ BEGINNING
  ---------------------------------------------------------------------*/
  $('a[href^="mailto:"]').addClass("mailto");

  /* ANCHOR TAG - PDF / $ ENDING
  ---------------------------------------------------------------------*/
  $('a[href$=".pdf"]').addClass("pdfLink");

  /* ANCHOR TAG - FIND WORD IN ANCHOR TAG
  ---------------------------------------------------------------------*/
  $('a[href^="http"][href*="name"]').addClass("find-name");