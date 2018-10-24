   // Highlighting Elements in the DOM
   
   // Highlights Next Element
   $("td:contains(name)").next().addClass("highlight"); 

   // Highlights All Next Elements
   $("td:contains(name)").nextAll().addClass("highlight"); 

   // Highlights Previous Element
   $("td:contains(name)").prev().addClass("highlight")

   // Highlights All Previous Elements
   $("td:contains(name)").prevAll().addClass("highlight");

   // Highlights All Siblings ( All DOM elements on same level )
   $("td:contains(name)").siblings().addClass("highlight");

   // Highlights All Next Element Along With Targeted Element
   $("td:contains(name)").nextAll().andSelf().addClass("highlight");

   // Moving Up the DOM And Selecting All The Children Elements
   $("td:contains(name)").parent().children().addClass("highlight");