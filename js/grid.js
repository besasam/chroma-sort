function clear() {
  var grid = document.getElementById('grid');
  while(grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function createBox(id) {
  var box = document.createElement('div');
  box.className = 'box';
  box.id = id;
  document.getElementById('grid').appendChild(box);
  /*box.setAttribute('draggable', true);
  box.setAttribute('ondragstart', drag(event))*/
}

function fillGrid(n) {
  for(var i = 0; i < n; i++) {
    createBox(i.toString());
  }
}

function colorize(start, end) {
  var squares = $('.box');
  var step = 100 / (squares.length - 1);
  for(var i = 1; i <= squares.length; i++) {
    var weight = step * (i - 1);
    var mix = mixColors(start, end, weight);
    setColor(i, mix);
  }
}

function shuffle() {
  var boxes  = $('.box');
  var length = boxes.length;
  var indexes = Array.apply(null, {length: length}).map(Number.call, Number);
  for(var i = 0; i < length; i++) {
    var rand = Math.floor(Math.random() * indexes.length);
    var index = indexes[rand];
    var box = boxes[index];
    document.getElementById('grid').appendChild(box);
    indexes.splice(rand, 1);
  }
}

function initialize(n) {
  clear();
  fillGrid(n);
  colorize(getRandomColor(), getRandomColor());
  shuffle();
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

function equals(array1, array2) {
  if(array1.length != array2.length) {
    return false;
  }
  for(var i = 0; i < array1.length; i++) {
    if(array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
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
