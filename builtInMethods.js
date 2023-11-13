// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// The includes method is called on the string "Hello World"
// includes works by determining if the string contains the defined(?) word "Hello"
// The return value is a boolean response of true or false, in this case it's true

"Hello World".endsWith("Hello");
// The endsWith method is called on the string "Hello World"
// endsWith determines if the string ends with "Hello"
// The return value is a boolean response and in this case it's false

"Hello World".endsWith("rld");
// The endsWith method is called on the string "Hello World"
// endsWith determines if the string ends with the letters "rld"
// The return value is a boolean response and in this case it's true


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

var angryCat = "Hiss";
var happyCat = "Once upon a time there was a happy cat who lounged all day";

// The repeat method allows you to repeat the string associated with the variable. 
// I assigned the string "hiss" to the variable angryCat. The repeat method is called with the use of angryCat and is repeated 3 times
// The return value is HiisHissHiss
console.log(`Hi how are you Kitty ${angryCat.repeat(3)}`);


// The replace method allows you to swap an existing portion of a string with a new string.
// replace is called on the variable happyCat. The variable happyCat contains the word 'lounged' that will be replaced by the word 'slept'.
// The return value will read "Once upon a time there was a happy cat who slept all day"

console.log(happyCat.replace('lounged', 'slept'));

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var hoursOfSleep = [6, 8, 7, 7, 8, 6, 7];
var birdsFromToday = ["Robin", "Seagull", "Chickadee", "Sparrow", "Goose"];

// sort method in an array will arrange elements into an ascending order. 
// all the elements of the original array will remain, they'll just be sorted
// In this case, hoursOfSleep will be sorted from fewest hours to greatest hours
console.log(hoursOfSleep.sort());

// indexOf returns the first index at which an element of an array can be found. 
// if it's not found the return value will be -1
// in this case, the return value for goose is 4
console.log(birdsFromToday.indexOf("Goose"));





