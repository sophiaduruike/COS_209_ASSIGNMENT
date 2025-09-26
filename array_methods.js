// This code demonstrates three fundamental ECMAScript 6 (ES6) array methods.

// Initial Array
const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "T-shirt", price: 25, category: "Apparel" },
  { name: "Mouse", price: 30, category: "Electronics" },
  { name: "Jeans", price: 60, category: "Apparel" },
  { name: "Keyboard", price: 75, category: "Electronics" }
];

// The .map() method
console.log("--- Demonstrating .map() ---");
const productNames = products.map(product => product.name);
console.log("Original products array:", products);
console.log("New array of product names:", productNames);


// The .filter() method
console.log("\n--- Demonstrating .filter() ---");
const expensiveProducts = products.filter(product => product.price > 50);
console.log("Products more expensive than $50:", expensiveProducts);


// The .find() method 
console.log("\n--- Demonstrating .find() ---");
const foundMouse = products.find(product => product.name === "Mouse");
const nonExistentProduct = products.find(product => product.name === "Webcam");
console.log("Found product 'Mouse':", foundMouse);
console.log("Found product 'Webcam':", nonExistentProduct);
