let states = ["Alaska",
              "Alabama",
              "Arkansas",
              "American Samoa",
              "Arizona",
              "California",
              "Colorado",
              "Connecticut",
              "District of Columbia",
              "Delaware",
              "Florida",
              "Georgia",
              "Guam",
              "Hawaii",
              "Iowa",
              "Idaho",
              "Illinois",
              "Indiana",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Massachusetts",
              "Maryland",
              "Maine",
              "Michigan",
              "Minnesota",
              "Missouri",
              "Mississippi",
              "Montana",
              "North Carolina",
              " North Dakota",
              "Nebraska",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "Nevada",
              "New York",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Puerto Rico",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Virginia",
              "Virgin Islands",
              "Vermont",
              "Washington",
              "Wisconsin",
              "West Virginia",
              "Wyoming"]

// Kansas -> kansas
// North Dakota -> north-Dakota




// Returns a URL-friendly version of a string.
//    example: "North Dakota" -> "north-Dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-")};






// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}

// singles: Imperative version
// Finds all states with just one word e.g Kansas, Texas but NOT New York.
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element)
    }
  });
  return singles;
}
// console.log(imperativeSingles(states));




// urls: Functional version
function functionalUrls(n) {
  return states.map( n => urlify(n) )
};

// singles: Functional version
// Finds all states with just one word e.g Kansas, Texas but NOT New York.
// filter finds all true statements e.g
// [1, 2, 3, 4, 5, 6, 7, 8].filter(n => n % 2 === 0) returns
// [2, 4, 6, 8]
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
// console.log(functionalSingles(states));





// produce an arrary
//    Example: ["https://example.com/kansas",...,
//              "https://example.com/south-dakota"]
function url(n) {
  return states.map( n => "https://example.com/" + urlify(n) );
}




// Print elements from Array
//    Example: https://example.com/kansas
//             https://example.com/north-dakota
//             https://example.com/south-dakota
//             https://example.com/nebraska
Array.from(url(states)).forEach(function(element) {
  // console.log(element);
});






function findDakota(elements) {
  return elements.filter(element => element.toLowerCase().includes("Dakota".toLowerCase()))
}

function findLengthTwo(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2)
}






let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Sum: Imperative way
function sumImperative(elements) {
  let count = 0;
  elements.forEach(function(n) {
    count += n
  });
  return count
};

// Sum: Functional way
function functionalSum(elements) {
  return elements.reduce( (total, n) => {return total += n}, 20 ) // total begins counting from 20-
}

// Product: Functional way
function functionalProduct(elements) {
  return elements.reduce ( (total, n) => {return total *= n}, 1)
}





// lenghts: Imperative way
// retrun element in an array and its length, e.g
//   Alaska: 6, Alabama: 7, Arkansas: 8,
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}

// lengths: Functional way
function functionalLengths(elements) {
  return elements.reduce( (lengths, element) => {lengths[element] = element.length; return lengths}, {});
}
