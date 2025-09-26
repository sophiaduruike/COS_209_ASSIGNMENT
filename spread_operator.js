// This code demonstrates the ES6 spread operator

// --- 1. Spreading Arrays ---
const fruits = ["apple", "banana", "cherry"];
const moreFruits = ["date", "elderberry"];

console.log("--- Spreading Arrays ---");
const combinedFruits = [...fruits, ...moreFruits];
console.log("Combined fruits:", combinedFruits);


// Creating a new array with an additional element without modifying the original.
const newFruits = [...fruits, "grape"];
console.log("New fruits array:", newFruits);
console.log("Original fruits array remains unchanged:", fruits);


// --- 2. Spreading Objects ---
const user = {
  name: "Sophia",
  age: 21
};

const address = {
  city: "New York",
  country: "USA"
};

// Combining two objects into a new object.
console.log("\n--- Spreading Objects ---");
const userProfile = { ...user, ...address };
console.log("Combined user profile:", userProfile);

// Updating an object property without modifying the original.
const updatedUser = { ...user, age: 22 };
console.log("Updated user object:", updatedUser);
console.log("Original user object remains unchanged:", user);
