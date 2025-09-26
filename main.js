// Importing from utils.js

import { PI, subtract, MathTools } from './utils.js';

console.log("Value of PI:", PI);                     
console.log("Difference:", subtract(20, 5));         

const tools = new MathTools();
console.log("Division:", tools.divide(10, 2));      
console.log("Division by zero:", tools.divide(10, 0)); 
