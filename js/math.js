function d2h(dec) {
  return dec.toString(16);
}

function h2d(hex) {
  return parseInt(hex, 16);
}

function euclideanDistance(array1, array2) {
  if(array1.length != array2.length) {
    return 0;
  }
  var res = 0;
  for(var i = 0; i < array1.length; i++) {
    res += Math.pow(array1[i] - array2[i], 2);
  }
  return Math.sqrt(res);
}

function inArea(num1, num2, radius) {
  return((num1 >= num2 && num1 <= num2 + radius) || (num1 <= num2 && num1 >= num2 - radius));
}
