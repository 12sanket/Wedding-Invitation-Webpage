particlesJS.load('particles-js', '/assets/particlesjs-config.json', function () {
    console.log('')
});

var countDownDate = new Date("December 31, 2020 12:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m "
  document.getElementById("seconds").innerHTML = seconds + "s ";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock-title").style=" display: none";
    document.getElementById("days").style=" display: none";
    document.getElementById("hours").style=" display: none";
    document.getElementById("minutes").style=" display: none";
    document.getElementById("seconds").style=" display: none";
    document.getElementById("final-message").innerHTML = "Happily Married"
  }
}, 1000);