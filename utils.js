// Exporting variables, functions, and classes

// Export a constant
export const PI = 3.14159;

// Export a function
export function subtract(a, b) {
  return a - b;
}

// Export a class
export class MathTools {
  divide(a, b) {
    return b !== 0 ? a / b : "Error: Division by zero";
  }
}