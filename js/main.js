var winSound = new buzz.sound('assets/win.wav');
var difficulty = 5;
var solved = 0;
var points = 0;
var timerStart = new Date;

initialize(difficulty);
winSound.load();

$('#grid').sortable({
  cursor: 'pointer',
  revert: 100,
  stop: function(ondrop, item) {
    if(isSorted()) {
      winSound.play();
      showWinMessage();
      solved++;
      points += Math.ceil((difficulty * 10) / parseInt($('#timer').text()));
      setTimeout(function() {
        hideWinMessage();
        $('#solved').text(solved);
        $('#points').text(points);
        setTimeout(function() {
          initialize(difficulty);
          resetTimer();
        }, 100);
      }, 1000);
    }
  }
});

setInterval(function() {
    $('#timer').text(Math.round(((new Date - timerStart) / 1000), 0));
}, 1000);
