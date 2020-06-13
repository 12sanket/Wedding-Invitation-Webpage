var countDownDate = new Date("July 02, 2020 13:31:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock-title").style=" display: none";
    document.getElementById("clock").innerHTML = "Happily Married";
  }
}, 1000);