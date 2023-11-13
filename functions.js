// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function alienGreeting() {
    return "Hello, Earthling. It's most excellent to meet you.";
}
console.log(alienGreeting())

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Hello, Earthling. Oh, I mean Hello, ${name}!`;
}
console.log(customGreeting("Asim"));
console.log(customGreeting("Charmander"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName) {
    var fullName = firstName + middleName + lastName;
    return `Hi there, ${fullName}, that is quite the name you have!`;
}

console.log(greetPerson("Johnny", "The", "Appleseed"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num1) {
    var answer = num1 * num1;
    return answer;
}
console.log(square(23));
console.log(`The square of 23 is ${square(23)}`);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.


function checkStock(quantity, item) {
    if (quantity === 4) {
        console.log("Coffee is stocked");

    } else if (quantity === 3) {
        console.log("Tortillas - running LOW");

    }else if (quantity === 0) {
        console.log("Cheese - OUT of stock!");

    }else if (quantity === 1) {
        console.log("Salsa - running LOW")
    }
}
  

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
