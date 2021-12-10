(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("mhartl-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`'${phrase.content}' is a palindrome!`)
} else {
  alert(`'${phrase.content}' is not a palindrome.`)
};
// alert(string)
// alert(new Phrase("Madam, I'm Adam.").palindrome());

},{"mhartl-palindrome":2}],2:[function(require,module,exports){

module.exports = Phrase;


// Reverse order of a string
function reverse(string) {
  // return string.split("").reverse().join("");
  // The above won't work on complex characters such as emojis
  // as they are 2 characters.
  // Instead we create an arrary from a string using Array.from():
  //  Array.from('honey badger');
  //  [ 'h', 'o', 'n', 'e', 'y', ' ', 'b', 'a', 'd', 'g', 'e', 'r' ]
  return Array.from(string).reverse().join("");
}


// Define a Phrase object
function Phrase(content) {
  this.content = content;

  this.louder = function() {
    return this.content.toUpperCase();
  };

  // Returns Lower Case
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns only the letters in the content
  this.letters = function letters() {
    const lettersRegEx = /[a-z]/gi; // match just upper/lower case letters
    // 1st method
    // If this.content is false return the empty string ( || = "or")
    return ( this.content.match(lettersRegEx) || [] ).join("");
    // 2nd method
    // return Array.from(this.content).filter(char => char.match(/[a-zA-Z]/g)).join("");
  }

  // Returns content processed for palindrome testing
  // lower-case and just letters
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  // Check if string is a palindrome. Will return true or false.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}


// returns any string in reverse order e.g "cat" -> "tac"
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// returns true if string is a palindrome
String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
}

// Returns true if string is empty or only whitespace/s.
String.prototype.blank = function() {
  return !!(this.match(/^\s*$/))
}

// returns the last element of an array
Array.prototype.last = function() {
  return this.slice(-1)[0];
}

let p = new Phrase("12358")

console.log(p.letters());
console.log(p.processedContent());
console.log(p.palindrome());

},{}]},{},[1]);
