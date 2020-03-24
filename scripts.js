
/* Slider settings */
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: true
  });
});

/* Сountdown settings */
function getTimeRemaining(endtime) {
var t = Date.parse(endtime) - Date.parse(new Date());
var seconds = Math.floor((t / 1000) % 60);
var minutes = Math.floor((t / 1000 / 60) % 60);
var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
return {
total: t,
hours: hours,
minutes: minutes,
seconds: seconds
};
}

function initializeClock(id, endtime) {
var clock = document.getElementById(id);
var hoursSpan = clock.querySelector(".hours");
var minutesSpan = clock.querySelector(".minutes");
var secondsSpan = clock.querySelector(".seconds");

function updateClock() {
var t = getTimeRemaining(endtime);

if (t.total <= 0) {
clearInterval(timeinterval);
var deadline = new Date(Date.parse(new Date()) + 6 * 1000);
initializeClock('countdown', deadline);
}

hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
}

updateClock();
var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 35000 * 1000);
initializeClock("countdown", deadline);


$(document).ready(function() {
$("#buy-submit").click(function(){
    var name = $('#name').val();
    var tel = $('#phone').val();
     $.ajax({
        type: "POST",
        url:"form.php", // Handler address
        data: {
            "name" : name,
            "phone" : phone,
        },
        error:function(){$("#info").html("Error!");},
		beforeSend: function() {
            $("#info").html("Application is being sent ...");
        },
		success: function(result){
			$("#info").html(result);
			checkThis();
		}
    });
    return false;
});
});













  // This function creates an <iframe> (and YouTube player)
  //  after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '468',
      width: '832',
      videoId: 'orSenfTJCf8',
      playerVars: { 'autoplay': 1, 'controls': 0 },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // The API calls this function when the player's state changes.
  // The function indicates that when playing a video (state=1),
  // the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      done = true;
    }
  }
