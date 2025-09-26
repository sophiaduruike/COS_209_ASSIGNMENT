// Example of ES6 Destructuring

//Array Destructuring
const fruits = ["Apple", "Banana", "Orange"];

//Destructure array values into variables
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log("First Fruit:", firstFruit);   // Apple
console.log("Second Fruit:", secondFruit); // Banana
console.log("Third Fruit:", thirdFruit);   // Orange


//Object Destructuring
const student = {
  name: "Sophia",
  level: 200,
  course: "Computer Science"
};

//Destructure object properties into variables
const { name, level, course } = student;

console.log("Name:", name);       // Sophia
console.log("Level:", level);     // 200
console.log("Course:", course);   // Computer Science


//Nested Destructuring
const person = {
  fullName: "John Doe",
  address: {
    city: "Lagos",
    country: "Nigeria"
  }
};

const { fullName, address: { city, country } } = person;

console.log("Full Name:", fullName); 
console.log("City:", city);         
console.log("Country:", country);  