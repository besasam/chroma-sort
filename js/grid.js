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
  var firstColor = getRandomColor();
  var secondColor;
  var rolls = 0;
  do {
    secondColor = getRandomColor();
    rolls++;
  } while(colorDifference(firstColor, secondColor) == false && rolls < 50);
  console.log(rolls);
  colorize(firstColor, secondColor);
  do {
    shuffle();
  } while (isSorted());
  addWinMessage();
}
