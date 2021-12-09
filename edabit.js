// return sum of two numbers
function addition(a, b) {
  return a + b;
}

function addUp(num) {
  total = 0;
  let i = 0;
  while (i <= num) {
    total += i;
    i++;
  }
  return total
}

function addUp2(num) {
  return (1+num)*(num/2);
}

console.log(addUp2(1.31220874803645e+44));
