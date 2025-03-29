let seperation = "-------------------------------------\n"

console.log(seperation);
// 1. Ask the user for a number, increment by 3 using pre-increment, and print the result
let num = 32; 
console.log("Original number:", num);
console.log("After pre-incrementing by 3:", (++num, ++num, ++num, num));
console.log(seperation);

// 2. Start with 10, decrement by 2 using post-decrement
let points = 10;
console.log("Original points:", points);
points--;
points--;
console.log("After post-decrementing by 2:", points);
console.log(seperation);

// 3. Compare ages and determine who is older
let myAge = 18;
let yourAge =24;
console.log("let,\nMy age = ", myAge, "\nYour Age = ", yourAge);
if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log("We are the same age!");
}

console.log(seperation);

// 4. Assign grades based on scores
let score = 60;
let grade;

console.log("Score: ", score);

if (score >= 80 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
} else {
    grade = "Invalid Score";
}

console.log("Student's grade:", grade);

console.log(seperation);
