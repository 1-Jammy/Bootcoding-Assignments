// 1) Create variables using let and const keywords include firstName, lastName , 
// Address , City , Country, age, gender as a variable and 
// also print these using concatenation and template literals

let firstName = "Jayesh";
let lastName = "Khare";
let address = "KITS College";
const city = "Ramtek";
const country = "India";
let age = 19;
let gender = "male";

console.log("Name: ", firstName + ' ' + lastName);
console.log("Address: ", address + ', ' + city + ', ' + country);
console.log("Age: ", age);
console.log("Gender: ", gender);
console.log("\n");
/*------------------------------------------------------------*/

// 2) Create an Array of cars and print it.

let cars = ["Alto K10", "Swift", "WagonR", "Baleno", "Ertiga"];

for (i in cars){
    console.log(cars[i]);
}


console.log("\n");

/*------------------------------------------------------------*/

// 3) Create an Object which give information about College eg Name, City, Nation, 
// Course and print it.

class CollegeInfo{
    constructor(){
        this.collegeName = "Kavikulguru Institute of Technology and Science";
        this.collegeCity = "Ramtek";
        this.nation = "India";
        this.course = "B. Tech";
    }

    displayDetails() {
        console.log("College info:-");
        console.log("Name:", this.collegeName);
        console.log("City:", this.collegeCity);
        console.log("Nation:", this.nation);
        console.log("Course:", this.course);
    }
}

const college = new CollegeInfo();
college.displayDetails();
