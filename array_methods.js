// This code demonstrates five fundamental ECMAScript 6 (ES6) array methods.

//Initial Array:
const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "T-shirt", price: 25, category: "Apparel" },
  { name: "Mouse", price: 30, category: "Electronics" },
  { name: "Jeans", price: 60, category: "Apparel" },
  { name: "Keyboard", price: 75, category: "Electronics" }
];

//1. The .map() method
console.log("--- Demonstrating .map() ---");
const productNames = products.map(product => product.name);
console.log("Original products array:", products);
console.log("New array of product names:", productNames);

//2. The .filter() method 
console.log("\n--- Demonstrating .filter() ---");
const expensiveProducts = products.filter(product => product.price > 50);
console.log("Products more expensive than $50:", expensiveProducts);

//3. The .find() method
console.log("\n--- Demonstrating .find() ---");
const foundMouse = products.find(product => product.name === "Mouse");
const nonExistentProduct = products.find(product => product.name === "Webcam");
console.log("Found product 'Mouse':", foundMouse);
console.log("Found product 'Webcam':", nonExistentProduct);

//4.The .forEach() method
console.log("\n--- Demonstrating .forEach() ---");
console.log("Listing all products with prices:");
products.forEach(product => {
  console.log(`${product.name} costs $${product.price}`);
});

//5. The .reduce() method
console.log("\n--- Demonstrating .reduce() ---");
const totalCost = products.reduce((acc, product) => acc + product.price, 0);
console.log("Total cost of all products:", totalCost);