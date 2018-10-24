// Finds Elements Containing "Henry"
$("td:contains(Henry)") 

// Select Its Parent
.parent() 

// Finds Second Descendant Element
.find("td:eq(1)") 

// Adds Highlight Class to Element
.addClass("highlight")

// Returns to Parent Element containing "Henry"
.end() 

// Finds Third Descendant Element
.find("td:eq(2)")