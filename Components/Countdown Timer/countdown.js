function countdown() {
    var currentDate = new Date();
    //console.log("** current date **  " + currentDate);

    var millCurrent = Number(currentDate);
    //console.log("**millisecond for current date ** " + millCurrent)

    var setTime = new Date('Jan 18 2017 00:00:00 GMT-0500(US Eastern Standard Time)');
    //console.log("**set Date** " + setTime)

    var millSetTime = Number(setTime);
    //console.log("**millisecond for set time ** " + millSetTime)

    var countTime = millSetTime - millCurrent;
    //console.log("Countdown time ... " + countTime)

    var countdownTimer = $("#countdownTimer");

    // Countdown timer
    //var date = parseInt(Math.round(countdownTimer.data("time")));
    var date = parseInt(Math.round(countTime));

    function convertMS(ms) {
        var d, h, m, s;

        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;

        return { d: d, h: h, m: m, s: s };
    };

    var timerText = countdownTimer, countdown = Tock({
        countdown: true,
        interval: 500,
        callback: function () {
            var counter = countdown.timeToMS(countdown.lap());
            counter = convertMS(counter);
            timerText.html("<span class='single'>" + counter.d + "</span><span class='colon'>:</span><span class='double'>" + ("0" + counter.h).slice(-2) + "</span><span class='colon'>:</span><span class='double'>" + ("0" + counter.m).slice(-2) + "</span><span class='colon'>:</span><span class='double'>" + ("0" + counter.s).slice(-2) + "</span>");
            // Seconds if needed - <span class='colon'>:</span><span class='double'>" + ("0" + counter.s).slice(-2) + "</span>
        },
        complete: function () {
            // Countdown completed
            countdown.stop();
            countdownTimer.html("0<span class='colon'>:</span>00<span class='colon'>:</span>00<span class='colon'>:</span><span class='double'>00</span>");
        }
    });

    countdown.start(date);
}