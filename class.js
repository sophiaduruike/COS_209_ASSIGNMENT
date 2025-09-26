// Example of ES6 Class

// 1. Class Definition
class Student {
// 2. Constructor Method
  constructor(name, level, course) {
    this.name = name;
    this.level = level;
    this.course = course;
  }

// 3. Method inside the class
  introduce() {
    return `Hi, I'm ${this.name}, a ${this.level}-level ${this.course} student.`;
  }
}

// 4. Creating objects (instances) from the class
const student1 = new Student("Sophia", 200, "Computer Science");
const student2 = new Student("John", 300, "Software Engineering");

// 5. Using the class methods
console.log(student1.introduce());
console.log(student2.introduce());
