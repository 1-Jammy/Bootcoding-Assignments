let seperation = "-------------------------------------\n"

// 1) Create a String and use escape sequences
let str = "Hello,\nThis is a tab:\tTabbed Text\nBackslash: \\ \"Double Quotes\" 'Single Quotes'";
console.log(str);
console.log(seperation)

// 2) Calculate length of string and convert it to Uppercase, Lowercase
let example = "HighSchool";
console.log("Original string: ", example)
console.log("Length:", example.length);
console.log("Uppercase:", example.toUpperCase());
console.log("Lowercase:", example.toLowerCase());
console.log(seperation)

// 3) Separate "SCRIPT" using substr and substring
let word = "JAVASCRIPT";
console.log("Word: ", word)
console.log("Using substr:", word.substr(4, 6));
console.log("Using substring:", word.substring(4, 10));
console.log(seperation)

// 4) Find the last index of the word "GREEN"
let sentence = "The leaves are GREEN and the grass is also GREEN.";
console.log("Sentence: ", sentence)
console.log("Last index of GREEN:", sentence.lastIndexOf("GREEN"));
console.log(seperation)

// 5) Convert string "0.28" into Number
let numStr = "0.28";
let num = parseFloat(numStr);
console.log("Converted number:", num);
console.log(seperation)

// 6) Generate a Random number between 0-9
let randomNum = Math.floor(Math.random() * 10);
console.log("Random number (0-9):", randomNum);
console.log(seperation)
