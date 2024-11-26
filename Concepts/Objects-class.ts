
// simple person class

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("Alice", 25); // Instance of a class (object)


  // Explanation

// Class Declaration: We define a class named Person with three properties: firstName, lastName, and age.
// Constructor: The constructor is a special method that initializes the object's properties. It takes three parameters: firstName, lastName, and age.
// Method: The greet() method is a function that is defined within the class. It logs a greeting message to the console.
// Object Creation: We create an object of the Person class using the new keyword. The constructor is called with the specified arguments.
// Method Invocation: We call the greet() method on the person1 object.




//Inheritance 


class Student extends Person {
    grade: number;
  
    constructor(firstName: string, lastName: string, age: number, grade: number) {
      super(firstName, age);
      this.grade = grade;
    }
  
    study() {
      console.log("I am studying hard.");
    }
  }
  
  let student1 = new Student("Bob", "Smith", 20, 10);
  student1.greet(); // Inherited from Person
  student1.study(); // Specific to Student



//   Classes provide a blueprint for creating objects.
// Objects are instances of a class.
// Use the new keyword to create objects.
// The constructor initializes an object's properties.
// Methods are functions defined within a class.
// Inheritance allows you to create new classes based on existing ones.


// object 
// Object as an instance of a class
const personInstance = new Person("Bob", 30);

// Object literal
const personObject = {
  name: "Charlie",
  age: 35,
  greet: () => "Hello, my name is Charlie",
};



// inheritence 
interface Person {
    name: string;
    age: number;
    greet(): string;
  }
  
  // Object conforming to an interface
  const persons: Person = {
    name: "Dave",
    age: 40,
    greet: () => "Hello, my name is Dave",
  };
  


  // combined  interface , class and object

  interface Person {
    name: string;
    age: number;
    greet(): string;
  }
  
  class Employee implements Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet(): string {
      return `Hi, I'm ${this.name}`;
    }
  }
  
  // Class instance (object)
  const employee = new Employee("Alice", 28);
  console.log(employee.greet()); // Output: Hi, I'm Alice
  
  // Object literal
  const manager: Person = {
    name: "Bob",
    age: 35,
    greet: () => "Hello, I'm Bob",
  };
  console.log(manager.greet()); // Output: Hello, I'm Bob



  
  