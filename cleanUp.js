// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// Unsure if this is too simple of a change, but I formatted the code so it's easier to read and I added semi-colons.

function askForName() { 
  console.log("Hello, what is your name?"); }

askForName();


// EX 2:
// I added console.log so that both return values for the addThreeNums functions were listed. 
// Before, only the final return value was listed in the console. 
function addThreeNums(first, second, third) {
var sum = first + second + third;
return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));


// EX 3:
// I completed the word "function" (originally it only said "func"). This allowed the function to appear properly.
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();


//  EX 4:
// I defined values for the variables num1 and num2 and then requested that return value was visible in the console.
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }

  console.log(average(234, 333));

  
