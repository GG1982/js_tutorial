
list = [];

for (i = 1; i <= 10; i++) {
  list.push(i)}

// console.log(list);





function stringMessage(string) {
  if (string) {
    return "The string is non-empty";
  } else {
    return "it's an empty string!";
  }
}


// Soret numbres in order

let a = [8, 5, 36, 14]

function numberCompare(a, b) {
  if (a > b) {
    return 1;
  }
  else if (a < b) {
    return -1;
  }
  else {
    return 0
  }
}

// console.log(a.sort(numberCompare));


function square(n) {
  return (n ** 2);
}
let altSquare = (n) => {
  return (n ** 2);
}


// Split email into username and domain parts
function emailParts(email) {
  var emailSplit = email.toLowerCase().split("@")
  username = emailSplit[0];
  domain = emailSplit[1];
  return (`Username: ${username}, Domain: ${domain}`)
}


var list = ["ant", "bar", "cat", 42]
list.forEach(function(element) {
  // console.log(element);
});


let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  // console.log(character);
});

// Sort an array in order of size
let array = [8, 99, 76, 54, 12, 6]
array.sort(function(a, b) { return a - b});
array.forEach(function(element) {
  console.log(element);
});
