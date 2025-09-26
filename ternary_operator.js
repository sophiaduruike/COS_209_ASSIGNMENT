// Example of ES6 Ternary Operator

// 1) Simple Example
const age = 17;

const message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message); 

// 2) Nested Ternary Operator
const score = 75;

// Using nested ternary to assign grades
const grade = score >= 70 ? "A" 
            : score >= 60 ? "B" 
            : score >= 50 ? "C" 
            : score >= 45 ? "D" 
            : score >= 40 ? "E" 
            : "F";

console.log("Your Grade:", grade); 


// 3) Ternary with Functions
function checkEvenOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(10)); 
console.log(checkEvenOdd(7));  