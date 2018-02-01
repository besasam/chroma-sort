function d2h(dec) {
  return dec.toString(16);
}

function h2d(hex) {
  return parseInt(hex, 16);
}

function inArea(num1, num2, radius) {
  return((num1 >= num2 && num1 <= num2 + radius) || (num1 <= num2 && num1 >= num2 - radius));
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
