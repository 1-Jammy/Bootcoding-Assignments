let seperation = "-------------------------------------\n"

console.log(seperation);
// 1) Create an Array of Vegetables and perform operations
let vegetables = ["Carrot", "Potato", "Tomato"];
console.log("Original Array:", vegetables);

vegetables.push("Cabbage");
console.log("After PUSH:", vegetables);

vegetables.pop();
console.log("After POP:", vegetables);

vegetables.shift();
console.log("After SHIFT:", vegetables);

vegetables.unshift("Onion");
console.log("After UNSHIFT:", vegetables);
console.log(seperation);

// 2) Perform Arithmetic and Assignment operations
let a = 10, b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

let square = a ** 2;
console.log("Square of", a, ":", square);
console.log(seperation);

// Using Assignment Operators
let c = 20;
c += 10; // c = c + 10
console.log("After +=:", c);
c -= 5;  // c = c - 5
console.log("After -=:", c);
c *= 2;  // c = c * 2
console.log("After *=:", c);
c /= 5;  // c = c / 5
console.log("After /=:", c);

// 3) Find the second last element of an array
let nums = [0,1,2,3,4,5,6];
console.log("Second last element:", nums[nums.length - 2]);
console.log(seperation);
