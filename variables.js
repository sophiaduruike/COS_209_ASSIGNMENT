//DEMONSTRATION OF VARIABLES(VAR,LET,CONST)

// Demonstrating the 'var' keyword
console.log("--- Using 'var' ---");
if (true) {
  var oldSchoolVariable = "This is a var variable.";
  console.log(oldSchoolVariable);
}
console.log(oldSchoolVariable);


// Demonstrating the 'let' keyword 
console.log("\n--- Using 'let' ---");
let modernVariable = "This is a let variable.";
console.log(modernVariable);

if (true) {
  let blockScopedVariable = "This variable is inside the block.";
  console.log(blockScopedVariable);
}


// Demonstrating the 'const' keyword 
console.log("\n--- Using 'const' ---");
const constantVariable = "I am a constant and cannot be changed.";
console.log(constantVariable);
const myObject = { name: "Sophia" };
myObject.name = "John"; node 