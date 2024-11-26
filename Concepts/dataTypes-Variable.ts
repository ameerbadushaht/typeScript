// datatypes and variables

// syntax
//  let variableName: type = value;

let message : string = 'hello world'

// number
let age: number = 25;
const pi: number = 3.14;

// string
let username: string = "Alice";
const greeting: string = "Hello, World!";

// boolean
let isActive: boolean = true;
const hasFinished: boolean = false;


// Array
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana", "cherry"];

// tuple
let person: [string, number] = ["John", 30];


// enum
enum Colors {
  Red,
  Green,
  Blue,
}
let favoriteColor: Colors = Colors.Green;


// object
let user: { name: string; age: number } = { name: "Alice", age: 30 };

// union type
let id: string | number = 101;

// any
let anything: any = "Hello";
anything = 42; // Valid but not type-safe


// unknown
let data: unknown;
data = "Some value"; // Allowed

// void
function logMessage(): void {
  console.log("This function does not return anything.");
}


// never
function throwError(message: string): never {
  throw new Error(message);
}


// null and undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
