// Challenge

/*
1. Write an if statement that checks if a number is divisible by both 3 and 5. Use the modulo operator (%) to get the remainder of a dvision. For example, 15 % 3 === 0 means 15 is divisible by 3. If the condition is true, print "Pass". If the condition is false, print "Fail"
*/

const num = 15;
if (num % 3 === 0 && num % 5 === 0) {
  console.log("Pass");
} else {
  console.log("Fail");
}


/*
2. Write an if statement that checks if a string is equal to "yes" or "no", or if it is equal to "maybe" or "perhaps". If the condition is true, print "Pass". If the condition is false, print "Fail".
*/

let words = "maybe";

if (words === "yes" || words === "no" || words === "maybe" || words === "perhaps"){
  console.log('Pass');
} else {
  console.log("Fail");
}