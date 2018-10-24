function progressBarValue(percent, el) {
    //console.log(this, el);
    //console.dir(el.data);
    var progressBarWidth = percent * el.width() / 100;
    el.find('.progress-line').animate({ width: progressBarWidth }, 500).css("width", progressBarWidth + "%");
  }