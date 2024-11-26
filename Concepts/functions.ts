//TypeScript Function Examples

//Basic Function
function greet(name: string): void {
    console.log("Hello, " + name + "!");
  }
  
  greet("Alice");


// add numbers -- Function with Return Type
function add(x: number, y: number): number {
    return x + y;
  }
  
  let sum = add(5, 3);
  console.log(sum); // Output: 8


  // Optional Parameters

  function greet2(name: string, lastName?: string): void {
    if (lastName) {
      console.log("Hello, " + name + " " + lastName + "!");
    } else {
      console.log("Hello, " + name + "!");
    }
  }
  
  greet2("Alice");
  greet2("Bob", "Smith");


//Default Parameters
  function greet3(name: string, greeting: string = "Hello"): void {
    console.log(greeting + ", " + name + "!");
  }
  greet3("Alice");
  greet3("Bob", "Hi");



  //Reset parameters
  function sumNumbers(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  }
  
  let result = sumNumbers(1, 2, 3, 4, 5);
  console.log(result); // Output: 15


  // Arrow function 
  const greetArrow = (name: string): string => {
    return "Hello, " + name + "!";
  };
  console.log(greetArrow("Alice"));
  // Concise syntax for single-line functions
  const square = (x: number): number => x * x;


  // generic functionF
  function identity<T>(arg: T): T {
    return arg;
  }
  
  let output = identity<string>("myString");
  console.log(output); // Output: "myString" 1 