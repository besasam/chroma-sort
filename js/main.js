var difficulty = 5;
var solved = 0;
var points = 0;

initialize(difficulty);

$('#grid').sortable({
  cursor: 'pointer',
  revert: 100,
  stop: function(ondrop, item) {
    if(isSorted()) {
      showWinMessage();
      solved++;
      points += difficulty;
      setTimeout(function() {
        hideWinMessage();
        $('#solved').text(solved);
        $('#points').text(points);
        setTimeout(function() {
          initialize(difficulty);
        }, 100);
      }, 1000);
    }
  }
});
