function getRandomColor() {
  var letters = '01234567890ABCDEF';
  var color = '#';
  for(var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function mixColors(firstColor, secondColor, weight) {
  function d2h(dec) {
    return dec.toString(16);
  }
  function h2d(hex) {
    return parseInt(hex, 16);
  }

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
