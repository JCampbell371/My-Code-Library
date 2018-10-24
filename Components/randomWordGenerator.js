// Random Word Generator

if($("body").attr("id") == "wordGen") {
    getMyWord(0, 7);
  }

  /* FUNCTION :: RANDOM WORD GENERATOR
  ---------------------------------------------------------------------*/
  function getMyWord(min, max) {
    var gotFacts = [
      '<span>Text 1</span>',
      '<span>Text 2</span>',
      '<span>Text 3</span>',
      '<span>Text 4</span>',
      '<span>Text 5</span>',
      '<span>Text 6</span>',
      '<span>Text 7</span>',
      '<span>Text 8</span>',
    ];
    var randomFacts = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(randomFacts);
    //console.log(gotFacts[randomFacts]);
    var factsText = gotFacts[randomFacts];
    $("#genBlock").html(factsText);
  }