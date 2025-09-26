// This code demonstrates the concept of an ECMAScript 6 (ES6) arrow function.

// Basic Arrow Function Syntax
const greet = () => {
  console.log("Hello, world!");
};
greet();

//Arrow Function with a Single Parameter
const square = number => {
  return number * number;
};
console.log(square(4));

//Arrow Function with Multiple Parameters 
const calculateArea = (length, width) => {
  return length * width;
};
console.log(calculateArea(5, 8));

//Implicit Return (Single-Line Arrow Function)
const multiply = (x, y) => x * y;
console.log(multiply(3, 7));


//Arrow Functions as Callbacks
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(n => n * n);

console.log(numbers);
console.log(squaredNumbers);
