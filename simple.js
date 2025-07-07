console.log('Hello, world!');

// Variables
let name = 'John';
const age = 25;
let city = 'New York'; // Changed from var to let for consistency

// Arrays
let fruits = ['apple', 'banana', 'orange'];
console.log('Fruits:', fruits);

// Objects - Creating a person object with properties
let person = {
    name: 'Alice',
    age: 30,
    city: 'Los Angeles',
    // Added a method to get person info
    getInfo() {
        return `${this.name} is ${this.age} years old and lives in ${this.city}`;
    }
};
console.log('Person object:', person);
console.log('Person info:', person.getInfo());

// Functions
function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {
    // Added type checking to prevent NaN results
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

// Using functions
console.log(greet('World'));
console.log('Sum of 5 and 3:', add(5, 3));

// Conditional statements
if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are a minor');
}

// Loops
console.log('Counting from 1 to 5:');
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Array methods
fruits.forEach(fruit => {
    console.log(`I like ${fruit}`);
});

// Template literals
let message = `Welcome to ${city}, ${name}!`;
console.log(message);