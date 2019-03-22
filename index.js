
var a = parseInt(prompt('input a'), 10);
var b = parseInt(prompt('input b'), 10);
var c = parseInt(prompt('input c'), 10);
var x;

function getDis() {
  return b * b - 4 * a * c;
}

alert(getDis());

if (getDis() < 0) {
  alert('There are not datas');
} else if (getDis() === 0) {
  x = -b / (2 * a);
} else {
  x = (-b + Math.sqrt(getDis())) / (2 * a) || (-b - Math.sqrt(getDis())) / (2 * a);
}

alert(x);
