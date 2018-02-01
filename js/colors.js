function channels(color) {
  var r = h2d(color.substr(1,2));
  var g = h2d(color.substr(3,2));
  var b = h2d(color.substr(5,2));
  return [r,g,b];
}

function rgbToYuv(rgb) {
  var y = Math.floor(rgb[0]*0.299 + rgb[1]*0.587 + rgb[2]*0.114);
  var u = Math.floor(rgb[0]*-0.168739 + rgb[1]*-0.331264 + rgb[2]*0.5 + 128);
  var v = Math.floor(rgb[0]*0.5 + rgb[1]*-0.418688 + rgb[2]*-0.081312 + 128);
  return [y,u,v];
}

function getRandomColor() {
  var letters = '01234567890ABCDEF';
  var color = '#';
  for(var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorDifference(firstColor, secondColor) {
  var c1 = rgbToYuv(channels(firstColor));
  var c2 = rgbToYuv(channels(secondColor));
  var r = 100;
  if(inArea(c1[0],c2[0], r) && inArea(c1[1],c2[1], r) && inArea(c1[2],c2[2], r)) {
    return false;
  } else {
    return true;
  }
}

function mixColors(firstColor, secondColor, weight) {
  if(typeof(weight) == 'undefined') {
    weight = 50;
  }

  firstColor = firstColor.substr(1);
  secondColor = secondColor.substr(1);
  var color = '#';

  for(var i = 0; i < 6; i+= 2) {
    var v1 = h2d(firstColor.substr(i,2));
    var v2 = h2d(secondColor.substr(i,2));
    var val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));

    while(val.length < 2) {
      val = '0' + val;
    }

    color += val;
  }
  return color;
}

function setColor(n, c) {
  $('.box:nth-of-type(' + n + ')').css('background', c);
}
