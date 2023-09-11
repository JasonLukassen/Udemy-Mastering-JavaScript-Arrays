let str = "Jason";

// let wordArray = str.split(" ", 10);
// let commaArray = str.split(",");
// let hyphenArray = str.split("-");
// let regexArray = str.split(/[,.]--/);
let nothingArray = str.split("");

// console.log(nothingArray)
nothingArray.reverse();

console.log(nothingArray)

let reversedString = nothingArray.join("");

console.log(reversedString);