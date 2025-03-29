// Function Declaration
function printArrayDeclaration(arr) {
    arr.forEach(value => console.log(value));
}

// Function Expression
const printArrayExpression = function(arr) {
    arr.forEach(value => console.log(value));
};

// Arrow Function
const printArrayArrow = (arr) => {
    arr.forEach(value => console.log(value));
};

// Example Array
const numbers = [10, 20, 30, 40, 50];

console.log("Using Function Declaration:");
printArrayDeclaration(numbers);
console.log("---------------------------\n");

console.log("Using Function Expression:");
printArrayExpression(numbers);
console.log("---------------------------\n");

console.log("Using Arrow Function:");
printArrayArrow(numbers);
console.log("---------------------------\n");
