// Generics are defined using angle brackets <>, with a type parameter inside,
//  typically represented by T (though you can use any identifier).

// Syntax 

function identitySample<T>(value: T): T {
    return value;
  }
  
  const result1 = identity<number>(42); // T is number
  const result2 = identity<string>("Hello"); // T is string
  


// 1. Generic Functions
// Generics in functions allow the type to be determined dynamically.

function reverseArray<T>(items: T[]): T[] {
  return items.reverse();
}

const numbers = reverseArray<number>([1, 2, 3, 4]); // [4, 3, 2, 1]
const strings = reverseArray<string>(["a", "b", "c"]); // ["c", "b", "a"]


// 2. Generic Interfaces 

// You can define an interface with generics to enforce structure with dynamic types. 



interface Box<T> {
    content: T;
  }
  
  const numberBox: Box<number> = { content: 42 };
  const stringBox: Box<string> = { content: "Hello" };

  


//   3. Generic Classes 


// Generics in classes enable creating reusable class definitions for multiple types. 


class DataStore<T> {
    private data: T[] = [];
  
    add(item: T): void {
      this.data.push(item);
    }
  
    getAll(): T[] {
      return this.data;
    }
  }
  
  const numberStore = new DataStore<number>();
  numberStore.add(1);
  numberStore.add(2);
  console.log(numberStore.getAll()); // [1, 2]
  
  const stringStore = new DataStore<string>();
  stringStore.add("A");
  stringStore.add("B");
  console.log(stringStore.getAll()); // ["A", "B"]

  
  
//   4. Generic Constraints 
// You can restrict the type that a generic parameter can accept using extends.



interface HasLength {
    length: number;
  }
  
  function logWithLength<T extends HasLength>(value: T): void {
    console.log(value.length);
  }
  
  logWithLength("Hello"); // Works: string has length
  logWithLength([1, 2, 3]); // Works: array has length
  // logWithLength(42); // Error: number does not have length

  

//   5. Default Types in Generics 
// You can specify default types for generics. 


function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
  }
  
  const strings1 = createArray(3, "Hello"); // Default to string
  const numbers1 = createArray<number>(3, 42); // Explicitly number




//   ****** Real-World Example ******
// Generic API Response Wrapper


interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }
  
  function fetchData<T>(url: string): Promise<ApiResponse<T>> {
    return fetch(url)
      .then(response => response.json())
      .then(data => ({
        data,
        status: 200,
        message: "Success",
      }));
  }
  
  interface User {
    id: number;
    name: string;
  }
  
  fetchData<User[]>("/api/users").then(response => {
    console.log(response.data[0].name); // Access user data with type safety
  });
  


//   When to Use Generics
    // When creating reusable libraries or components.
    // When writing functions or classes that need to work with multiple types.
    // When type safety is important for dynamic data structures.
// Generics make your TypeScript code robust, flexible, and reusable!