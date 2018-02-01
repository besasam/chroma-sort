function setDifficulty(k) {
  difficulty = k;
  initialize(k);
  resetTimer();
}

function addWinMessage() {
  var msg = document.createElement('span');
  msg.id = 'message';
  msg.innerHTML = 'Sorted!';
  document.getElementById('game').appendChild(msg);
}

function showWinMessage() {
  $('#message').addClass('show');
}

function hideWinMessage() {
  $('#message').removeClass('show');
}

function getOrder() {
  var boxes  = $('.box');
  var length = boxes.length;
  var order = Array(length);
  for(var i = 0; i < length; i++) {
    order[i] = parseInt(boxes[i].id);
  }
  return order;
}

function isSorted() {
  var boxes  = $('.box');
  var length = boxes.length;
  var correct1 = Array(length);
  var correct2 =  Array(length);
  for(var i = 0; i < length; i++) {
    correct1[i] = i;
    correct2[i] = length - i - 1;
  }
  var current = getOrder();
  return(equals(current, correct1) || equals(current, correct2));
}

function resetTimer() {
  $('#timer').text("0");
  timerStart = Date.now();
}
