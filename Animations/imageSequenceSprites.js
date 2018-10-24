function Videos1() {
    var rid = "image";
    var imageSrc = '../images/videos/' + rid + '.jpg';
    var flPlay = '<img src="' + imageSrc + '" id="Play" class="v-play" />';
    $('.video').append(flPlay);        
    var count = 0;
    var imgWidth = 290;
    var positionHeight = 0;
    var setAnimate = setInterval(function () {
      var positionWidth = -1 * (count * imgWidth);
      if(count === 14) {
        count = 0;
        positionWidth = -1 * (count * imgWidth);
        positionHeight = positionHeight - 163;
      }
      $("#Play").css({'top': positionHeight + 'px', 'left': positionWidth + 'px'});
      count++;
      if (positionHeight == -4238) {
        clearInterval(setAnimate);
        gameComplete();
      }
    }, 50);
  }

  function Videos2() {
     var rid = "image";
    var totalFrames;
    switch (prizeId) {
      case "101": totalFrames = 201; break;
      case "102": totalFrames = 202; break;
      case "103": totalFrames = 203; break;
      case "104": totalFrames = 204; break;
      case "105": totalFrames = 205; break;
     }
     var imageSrc = '../images/videos/' + rid + '.jpg';
     var count = 0;
     var flArr = [];
     for (var i = 0; i < totalFrames; i++) {
       var flPlay = '<div class="v-play run' + i + '" style="background-image: url(' + imageSrc + ');"></div>';
       flArr.push(flPlay);
     }
     $('.video').append(flArr.join(""));
     var setAnimate = setInterval(function () {
       $("#Videos .run" + count).hide();
       count++;
       if (count === totalFrames) {
         clearInterval(setAnimate);
         gameComplete();
       }
     }, 50);
    }

  function Video3() {
    var imgWidth = 325;
    var numFrameCount = 0;
    var positionHeight = 0;
    var animationExp = setInterval(function () {
      var positionWidth = -1 * (numFrameCount * imgWidth);
      if (positionWidth === -6175) {
        //console.log("** Hit Last Column **")
        numFrameCount = 0
        positionWidth = -1 * (numFrameCount * imgWidth);
        positionHeight = (positionHeight - 612);
      }
      $("#Play").css('background-position', positionWidth + 'px ' + positionHeight + 'px');
      //console.log('Lever Position Width ' + positionWidth);
      //console.log('Lever Position Height ' + positionHeight);
      numFrameCount++;
      if (positionWidth === 0 && positionHeight === -612) {
        startGame();
      }
      if (positionWidth === -5850 && positionHeight === -1224) {
        clearInterval(animationExp);
      }
    }, 50);
  }