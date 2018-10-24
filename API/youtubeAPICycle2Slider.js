// YouTube Api with Cycle 2 Slider

// .slider { margin: 0 auto 30px; }

var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  var playerWidth;
  var playerHeight;
  var browserType;

  if (browserType != "Mobile") {
      playerWidth = 852;
      playerHeight = 480;
  } else {
      playerWidth = 258;
      playerHeight = 146;
  }

  function onYouTubePlayerAPIReady() {
      player = new YT.Player('player', {
          width: playerWidth,
          height: playerHeight,
          loadPlaylist:{
              listType:'playlist',
              list: ['xxxx-xxxxxxxx', 'xxxx-xxxxxxxx', 'xxxx-xxxxxxxx'],
              index: parseInt(0),
              suggestedQuality: 'large'
          },
          playerVars: {
              'rel': 0,
              'showinfo': 0,
              'egm': 0,
              'showsearch': 0,
              'controls': 1,
              'modestbranding': 1,
              'autoplay': 0
          },
          events: {
              'onReady': onPlayerReady,
              //'onStateChange': onPlayerStateChange
          }
      });
  }

  function onPlayerReady(event) {
      $('#slideshow').on('cycle-before', function (e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
          var slideNum = optionHash.slideNum;
          console.log(slideNum)
          if (browserType != "Mobile") {
              if (slideNum == 3) {
                  event.target.loadPlaylist(['xxxx-xxxxxxxx', 'xxxx-xxxxxxxx', 'xxxx-xxxxxxxx']);
              } else {
                  stopVideo();
              }
          } else {
              if (slideNum == 5) {
                  event.target.loadPlaylist(['xxxx-xxxxxxxx', 'xxxx-xxxxxxxx', 'xxxx-xxxxxxxx']);
              } else {
                  stopVideo();
              }
          }
      });
  }

  function onPlayerStateChange(event) {
      switch (event.data) {
          case 0:
              console.log("current video " + player.getPlaylistIndex());
              console.log("video ended");
              break;
          case 1:
              console.log("current video " + player.getPlaylistIndex());
              console.log("play " + player.getCurrentTime());
              break;
          case 2:
              console.log("current video " + player.getPlaylistIndex());
              console.log("pause " + player.getCurrentTime());
      }
  }

  function stopVideo() {
      player.stopVideo();
  }